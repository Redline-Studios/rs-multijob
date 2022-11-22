local QBCore = exports['qb-core']:GetCoreObject()

local function toggleNuiFrame(shouldShow)
  SetNuiFocus(shouldShow, shouldShow)
  SendReactMessage('setVisible', shouldShow)
end


RegisterNetEvent('rs-multijob:client:toggleUI', function()
  toggleNuiFrame(true)
end)

RegisterNUICallback('getAllSharedJobs', function(data, cb)
  QBCore.Functions.TriggerCallback('qw-multijob:server:getAllNonWhitelistedSharedJobs', function(result)
    cb(result)
  end)
end)

RegisterNUICallback('getCurrentPlayerJobs', function(data, cb)
  QBCore.Functions.TriggerCallback('qw-multijob:server:getCurrentPlayerJobs', function(result)
    cb(result)
  end)
end)

RegisterNUICallback('setPlayerJob', function(data, cb)
  local job = data.job
  local type = data.type
  local rank = data.rank

  if type == 'nonWhitelisted' then
    TriggerServerEvent('qw-multijob:server:setPlayerUnwhitelistedJob', job)
    QBCore.Functions.Notify('Job has been Updated to: '..job, 'success', 7500)
    cb({})
  else 
    TriggerServerEvent('qw-multijob:server:setPlayerWhitelistedJob', job, rank)
    QBCore.Functions.Notify('Job has been Updated to: '..job, 'success', 7500)
    cb({})
  end
end)

RegisterNUICallback('hideFrame', function(_, cb)
  toggleNuiFrame(false)
  debugPrint('Hide NUI frame')
  cb({})
end)

