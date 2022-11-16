local QBCore = exports['qb-core']:GetCoreObject()

function GetJobCount(job)
    local count = 0
    local Players = QBCore.Functions.GetQBPlayers()
    for _, v in pairs(Players) do
        if v.PlayerData.job.name == job then
            count = count + 1
        end
    end
    return count
end

QBCore.Functions.CreateCallback('qw-multijob:server:getAllNonWhitelistedSharedJobs', function(source, cb)
    local jobs = QBCore.Shared.Jobs
    local src = source

    local Player = QBCore.Functions.GetPlayer(src)
    local PlayerJob = Player.PlayerData.job.name

    -- turn the table into an array where each key is the job name

    local result = {}

    for jobName, jobData in pairs(jobs) do
        if jobData.isWhitelisted == false then
            table.insert(result, {
                label = jobData.label,
                description = jobData.description,
                hourlyPay = jobData.grades['0'].payment,
                rankName = jobData.grades['0'].name,
                currentlyActiveAmount = GetJobCount(jobName),
                jobName = jobName,
                isActive =  PlayerJob == jobName,
            })
        end
    end

    cb(result)
end)

QBCore.Functions.CreateCallback('qw-multijob:server:getCurrentPlayerJobs', function(source, cb)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    local citizenId = Player.PlayerData.citizenid

    local retData = MySQL.Sync.fetchAll('SELECT * FROM player_multijobs WHERE cid = @cid', {
        ['@cid'] = citizenId
    })

    local result = {}

    for _, v in pairs(retData) do
        local jobData = QBCore.Shared.Jobs[v.job]
        table.insert(result, {
            label = jobData.label,
            description = jobData.description,
            hourlyPay = jobData.grades[v.rank].payment,
            rankName = jobData.grades[v.rank].name,
            currentlyActiveAmount = GetJobCount(v.job),
            jobName = v.job,
            isActive = v.isActive,
            rankNumber = v.rank,
        })
    end

    cb(result)
end)

RegisterNetEvent('qw-multijob:server:setPlayerUnwhitelistedJob', function(job) 
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    local citizenId = Player.PlayerData.citizenid
    Player.Functions.SetJob(job, 0)

    MySQL.query.await('UPDATE `player_multijobs` SET `isActive` = @isActive WHERE cid = @cid', {
        ['@isActive'] = 0,
        ['@cid'] = citizenId,
    })
end)

RegisterNetEvent('qw-multijob:server:setPlayerWhitelistedJob', function(job, rank) 
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    Player.Functions.SetJob(job, rank)

    local citizenId = Player.PlayerData.citizenid

    MySQL.query('UPDATE `player_multijobs` SET `isActive` = @isActive WHERE cid = @cid AND job = @job', {
        ['@isActive'] = 1,
        ['@cid'] = citizenId,
        ['@job'] = job,
    })

    MySQL.query('UPDATE `player_multijobs` SET `isActive` = @isActive WHERE cid = @cid AND job != @job', {
        ['@isActive'] = 0,
        ['@cid'] = citizenId,
        ['@job'] = job,
    })
end)

-- Commands

QBCore.Commands.Add('hirejob', 'Hire a person onto a Whitelisted job', { { name = 'playerid', help = 'player id of person to set job for' }, { name = 'jobname', help = 'name of job to add to persons multijob list' }, { name = 'rank', help = 'rank to hire person on at' } }, true, function(source, args)
    local src = source
    local Player = QBCore.Functions.GetPlayer(tonumber(args[1]))
    local job = args[2]
    local rank = args[3]

    if QBCore.Shared.Jobs[job] == nil then return TriggerClientEvent('QBCore:Notify', source, 'Invalid Job Name', 'error') end
    if QBCore.Shared.Jobs[job].isWhitelisted == false then return TriggerClientEvent('QBCore:Notify', source, 'Can not add a Non-Whitelisted Job to the whitelisted jobs', 'error') end

    if Player then
        local result =  MySQL.query.await('SELECT * FROM player_multijobs WHERE cid = @cid AND job = @job', {
            ['@cid'] = Player.PlayerData.citizenid,
            ['@job'] = job,
        })

        if result[1] == nil then
            MySQL.query.await('INSERT INTO `player_multijobs` (`cid`, `job`, `rank`) VALUES (?, ?, ?)', {
                Player.PlayerData.citizenid,
                job,
                rank,
            })
        else
            MySQL.query.await('UPDATE `player_multijobs` SET `rank` = @rank WHERE cid = @cid AND job = @job', {
                ['@rank'] = rank,
                ['@cid'] = Player.PlayerData.citizenid,
                ['@job'] = job,
            })
        end

        TriggerClientEvent('QBCore:Notify', src, 'Successfully add Job to Player', 'success')
    else
        TriggerClientEvent('QBCore:Notify', src, 'Player not online', 'error')
    end
end, 'admin')