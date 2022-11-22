# ![Redline Studios Banner](https://i.imgur.com/VFEXnGd.png)

## Redline Studios Discord

<https://dsc.gg/redlinestudios>

## Install

- place rs-multijob in [qb] folder
- update all jobs in `qb-core/shared/jobs.lua` to have the following additional fields

```lua
description = 'A civilian is a person who is not a member of the police force, the military, or the fire department.', -- Job Description
isWhitelisted = false, -- is your job Whitelisted or Not
```

- run the included `db.sql` file on your database

- Setup the Config as you want for your server

## Events

- Open multijob with event

```lua
-- Client
TriggerEvent('rs-multijob:client:toggleUI')

-- Server
TriggerClientEvent('rs-multijob:client:toggleUI', src)
```
