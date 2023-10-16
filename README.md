# Summary
Grumbler is a role play discord bot. It allows users to create profiles that are then matchmaked with other users with like interests. It targets the vore (vorarephilia) community.

The bot is designed to be easily adapted to nearly any other role playing community.

# Manual

## Rules when using:

1: Users of bot must be 18 years or older.
  - The bot deals with mature themes such as pornography and related topics. Its intended for those under the age of 18.
  - Users found under the age of 18 will be banned from using the bot for life.
  - Users found knowing another user is under the age of 18 and not reporting it will be suspended and/or banned from using the bot.
  - Users found under the age of 13 will be reported to discord in addition to being banned from the bot.

2: Users must be respectful and cordial of users they encounter while using the bot.
  - Grumblr provides a safe, inclusive space for people of all races, sexuality, religion, gender, national origin ect.
  - Racism, sexism, homophobia, transphobia, xenophobia ect is not tolerated outside of role play.
  - Unfriendly language, sexual harassment, intentional misgendering and all other sorts of unwanted interactions are also not tolerated outside of role play.
  - Users found being unfriendly, disrespectful ect will be receive warnings, suspensions and/or bans depending on severity.

3: Users must use the bot for its intended purpose, that is; finding rp partners and for bot development.
  - Users are expected to discuss and/or set up role play via the matches the bot makes.
  - Users using the bot solely for the purpose of meeting people for other purposes than role play or bot development are subject to suspensions and/or bans.

4: Users are not allowed to do anything else with the bot that takes away from the experience of other users in a meaningful way.

## How to use

It is strongly recommended a user enable developer mode to enable copying of user ids before using. 
Its also strongly advised you learn about the vore community and your role play preferences before using.

To start off with using the bot. You have a few options.
  - Send a dm to 1113619926738010122
  - Join a discord server with the bot having access to a channel and typing a command into it
  - Invite the bot to your server and run commands it provides.
Once the bot can see you, you can issue commands to it. You will need to start by using the /tos command and agreeing to the terms of use.
Once you agree, you will become a verified user and have access to its user commands. You are now ready to

To find quality role play, you'll need to fill out your profile first.
  - Determine what role you wish to have in a role play. Run /setrole, it gives you 5 options. See its docs for more info.
  - Run /kinklist to get a full list of kinks sent to your dms from the bot. The list will group like things together. [id] Name is the format of each kink.
  - Use the result of kinklist to use /setpreference and/or /setpreferencebyid to set your preferences. See the docs in each command for usage.
  - Optionaly, use /setavailability to set your availability for role play. Its displayed on your profile, adjusted for each viewers time zone.
  - Optionaly, use /setprofiledescription to provide a personal description of you, what you're looking for, a scenerio idea ect.
  - Optionaly, use /setprofiledetails to inform users of your preferred name, gender, age ect.
  - Optionaly. Use /setgenderpreference to allow you dictate or influence the gender of the people you are matached with. Requires setting your gender to use however.

With a profile set up, use /findrp to enter the match maker. See docs for /findrp for more info.
Once someone who marked compatible enough is found, you will get a notification for a match. You can request and/or accept matches via the provided buttons.
Once matched, you will be able to reach out and initiate a role play.

## Command reference.
All commands in the bot.

[Optional]: Marks an optional argument for a command. Not needed for it to be run.

<obsolete>: Marks a command that will be removed in the near future.

### User Commands
All user level commands default to requiring a verified user permission level to use unless stated.

#### tos
Shows the Terms of Service/Use and allows for unverified users to verify via clicking the accept button. Can be accessed by banned and unverified users.
The button click will fail if you are not an unverified user.

#### appealban
Gives information on how appeal a ban from the bot. Can be accessed by banned users and unverified users.

#### report
Gives information on how to report a rule breaker.

#### affinity: (User1) [Optional] (User2)
Compares to users and prints out the match quality of them.
User1: User to compare against
[Optional] User2: The other user to compare against. Defaults to self. Can be used with normal permissions.

#### exitrp: [Optional] (User)
Manully exit matchmaking. Must be matchmaking in order to use.

[Optional] User: User to run the command against. Requires admin level permissions to run on someone other than yourself.

#### findrp: [Optional] (quality) [Optional] (User)
Enter matchmaking.

Requirements to enter:
  - Verified user. Use /tos to verify.
  - Set role using /setrole to something other than unset.
  - Set 12+ kinks to not unset/neutral. Use /setpreference or /setpreferencebyid to set kinks.

[Optional] quality: Denotes the range of compatibility score that will result in a match. When comparing two users, the user with the highest selected quality level will be used.
  - Lowest: No hard conflicts results in a match. Intended for those who want to find a match quickly.
  - Low: Very low point threshold for match. Intended for those have some standards, but also will not take the first thing they see.
  - Default: Default value used. Medium point threshold for match. Strikes a balance between time to find a match and match quality.
  - High: Increased point threshold for a match. Intended for those willing to wait longer for a match with more in common.
  - Highest: Very high point threshold that can only reached with well filled out profiles with lots of things in common.

[Optional] User: User to run the command against. Requires admin level permissions to run on someone other than yourself.

#### help:
Prints a list commands with basic descriptions.

#### ignore: (User1) [Optional] (User2)
Prevents matches from being made with this user.

User1: User to black list.
[Optional] User2: User to run the command against. Requires admin level permissions to run on someone other than yourself.

#### ignorelist:
Lists black listed users.

#### kinklist:
Sends a list of all settable kinks to the users dirrect messages.

#### profile: (User1)
Displays the full profile of a user.
User1: User fetch the profile of.

#### resetprofile [Optional] (User)
Resets the profile to default.
[Optional] User: User to run the command against. Requires admin level permissions to run on someone other than yourself.

command: The command to run
- Request: Sends a request to the User1 if they matched with you and all conditions are valid.
- Accept: Accepts a rp request from User1 if they matched with you and all conditions are valid. Causes both you and User1 to exit the matchmaker.
  
User1: User to request/accept an rp from.
[Optional] User2: User to run the command against. Requires admin level permissions to run on someone other than yourself.

#### setavailability (timezone) (start) (end) [Optional] (User)
Sets availability for role play. This is only displayed on profile and does not impact matchmaking.

timezone: The timezone the inputted times are done in. The following time zones are provided.
- HST / UTC-10: Hawaii Standard time
- AKST / UTC-9: Alaska Standard time
- PST / UTC-8: Pacific Standard time
- MST / UTC-7: Mountain Standard time
- CST / UTC-6: Central Standard time
- EST / UTC-5: Eastern Standard time
- BRT / UTC-3: Brasilia time
- GMT / UTC+0: Greenwich Mean Time
- CET/BST/IST/WAT / UTC+1: Central European time / British Summer time / Irish Summer time / West Africa time
- EET/CAT/IST / UTC+2: Eastern European time / Central Africa time / Israel Standard time
- EAT/MSK / UTC+3: East Africa time / Moscow Standard time
- IST / UTC+5:30: India standard time
- SGT / UTC+8: Singapore time
- JST / UTC+9: Japan standard time
- ACST / UTC+9:30: Australian central standard time
- AEST / UTC+10: Australian eastern standard time

Users not within one of these time zones should choose the one and adjust their inputted time so its in that time zones time. Daylight savings (DST) is ignored, factor this in when selecting the time zone. The time inputted is converted to UTC+0 (GMT) time and is then stored, no time zone data is stored about a user. 

start: Start time of availability. Time input must be done in one of the following ways.
H = Hour; M = Minute; E = Meridiem characters (AM/PM)

Valid 24 hour clock formats:
- H
- HH
- HH:MM

Hour must be within (and including) 0 to 23. Minute must be within (and including) 0 to 59.

Valid 12 hour clock formats:
- H EE
- HH EE
- HH:MM EE

Hour must be within (and including) 1 to 12. Minute must be within (and including) 0 to 59. Meridiem must be AM or PM, not case sensitive.

end: End time of availability. Uses same formatting as above.

[Optional] User: User to run the command against. Requires admin level permissions to run on someone other than yourself.

#### setgenderpreference (gender1) (preferencelevel) [Optional] (gender2) [Optional] (User)
Sets the gender preference to match make with. Requires setting your gender before running.

gender1: The first gender you wish to match make with:
- Male: Male gender
- Female: Female gender
- Non-Binary: Non-binary gender
- Any: All genders. Setting this will set the (preferencelevel) for all genders.

preferencelevel:
- Require: Sets a hard requirement for someone to be one of the genders you set. Someone who has not set their gender will never be matched with you unless 'Any' is selected for gender1.
- Prefer: Reduces compatibility score for someone who isn't one of your preferred genders. (Half score).
- Indifferent: Default value. Ignores gender when scoring.

[Optional] gender2: The second gender you wish to match make with. If you wish to do something on all genders, select Any in gender1. 
- Male: Male gender
- Female: Female gender
- Non-Binary: Non-binary gender
  
[Optional] User: User to run the command against. Requires admin level permissions to run on someone other than yourself.

#### setpreference (kink) (preferencelevel) [Optional] (user)
Sets a kink preference in your profile.
kink: The name of the kink (not case sensitive) to set. Adding a ':' between each kink name you want to add will add multiple at once.

preferencelevel: Your preference on a kink being present or not present in your role play.
- Must: The kink must not be set to 'no-no' or it wil be marked as a deal breaker. You're not willing to compromise on this being present.
- Like: The kink is liked, but you are willing to compromise on it being present.
- Unset: You are indifferent about the kink. This the default value. 
- Dislike: You don't like the kink, but you're willing to compromise on it being present.
- No-no: The kink must not be set to must or it will be marked as a deal breaker. You're not willing to compromise on this being present.

[Optional] User: User to run the command against. Requires admin level permissions to run on someone other than yourself.

#### setpreferencebyid (kink) (preferencelevel) [Optional] (user)
Sets a kink preference in your profile.
kink: The id name of the kink to set. Its the number alongside a kink in the kinklist. Adding a ':' between each kink id you want to add will add multiple at once.

preferencelevel: Your preference on a kink being present or not present in your role play.
- Must: The kink must not be set to 'no-no' or it wil be marked as a deal breaker. You're not willing to compromise on this being present.
- Like: The kink is liked, but you are willing to compromise on it being present.
- Unset: You are indifferent about the kink. This the default value. 
- Dislike: You don't like the kink, but you're willing to compromise on it being present.
- No-no: The kink must not be set to must or it will be marked as a deal breaker. You're not willing to compromise on this being present.

[Optional] User: User to run the command against. Requires admin level permissions to run on someone other than yourself.

#### setprofiledescription (description) [Optional] (user)
Sets the description displayed with the profile.

description: A block of text between 1 - 3000 characters to be displayed.

[Optional] User: User to run the command against. Requires admin level permissions to run on someone other than yourself.

#### setprofiledetails (gender) (sexualorientation) (name) (age) [Optional] (user)
Sets general profile details for things such as gender, sexuaorientation, name and age. Required in order to set a gender preference for matchmaking.

gender: Your gender. This is not your characters gender. Setting this to any value will allow you to set a gender preference. It displays in the profile.
- Male: Binary male.
- Female: Binary female.
- Non-Binary: Any gender that can not be described as binary male or binary female.
Note: Setting gender will allow you to match make with those who require their partner to be a gender and improve scoring against partners who prefer your selected gender.

sexualorientation: Your sexual orientation. This is not your characters sexual orientation. It displays in the profile.
- Asexual: You're not sexually attracted to any gender.
- Homosexual: You're only sexually attracted to people of your gender. People who are homosexual are sometimes known as 'gay' or 'lesbian'.
- Heterosexual: You're only sexually attracted to people who are not your gender. People who are heterosexual are sometimes known as 'straight'.
- Bisexual: You're sexually attracted to male and female genders.
- Pansexual: You're sexually attracted to all genders.
Note: This has no impact on matchmaking scoring.

name: The name you wish to go by while using the bot.
age: A number. It needs to be your age.
[Optional] User: User to run the command against. Requires admin level permissions to run on someone other than yourself.

#### setrole (role) [Optional] (user)
Sets you preferred role in roleplay. You must set one in order to use to use the match maker.

role: The role you wish to use.
- Pred: Short for predator. The role that does the eating in a vore scene. Will never match with the pred role.
- Prey: The role is eaten in a vore scene. Will never match with user with the prey role.
- Switch: Willing to do either the Predator or Prey role with no preference. Will score equaly against preds or preys.
- Switch (Lean Pred): Willing to do either the Predator or Prey role but favors matching against prey. Will receive reduced compatibility score against predator leaning partners.
- Switch (Lean Prey): Willing to do either the Predator or Prey role but favors matching against predators. Will receive reduced compatibility score against prey leaning partners.

[Optional] User: User to run the command against. Requires admin level permissions to run on someone other than yourself.

#### unigore (user)
Removes a user from your black list

user: User to remove from your block list.

### Moderator Commands
All mod_ commands default to requiring a moderator level permission level. 
They are intended for moderators who take care of troublesome users.

#### mod_ban (discordid)
Bans a user from using to bots user commands.

discordid: The discord id of the person you are banning.
Notes: Same as running "/admin_changepermission discordid -1"

#### mod_unban (discordid)
Unbans a user from using the bots user commands.

discordid: The discord id of the person you are unbanning.
Notes: Same as running "/admin_changepermission discordid 0"

### Admin commands
All admin commands use the format admin_ and require admin level permissions to use.
Don't use these commands unless you know exactly what you're doing.

#### admin_addkink (id) (name) [Optional] (groups)
Adds a new kink to the system.

id: The kink id, must be unique or it will override an existing one. Can not use -9999.
name: The display name of the kink the id will translate to. Must be unique on a per character basis.
[Optional] groups: The groups this kink belongs in a colon separated list using the group ids. Use /admin_listgroups to fetch the current groups.

#### admin_addkinkgroup (id) (name) (kinkids)
Adds a new kink group to the system

id: The group id. Must be unique or it will override an existing group. Can not use -9999.
name: Displayname of the group.
kinkids: A colon separated list of kinkids that belong in the group.

#### admin_changepermission (discordid) (permissionlevel)
Changes the permission level of a user. Permission level is a field granting a certain level of access for a user.

Permission system overview: 
  - Less than -99. User is banned from using all commands.
  - -99 - -1. User is banned from using normal commands
  - 0 = Unverified user. All users start here by default.
  - 1 = Verified user. Users who agree to the terms of user promote themselves to this.
  - 2,3,4 = Moderator level permissions. Grants access to moderator level commands.
  - 5,6,7,8,9 = Admin level permissions. Grants access to admin level commands.
  - 10+ = Developer level permissions. Grants access to most developer level commands.
  - 1000 = Hard coded full permission level. Only can be granted via hard coding yourself as a developer.

discordid: The discord id of the person you are changing permission for. discordid can not be you.

permissionlevel: The permission level you are setting to. permissionlevel is be below 1000. You must have a higher permission level than the user you are adjusting. You must have a higher permission level than the one you are setting.

#### admin_listgroups

Lists all kink groups in the system. /kinklist does this indirectly by listing kinks in the groups listed by name instead of id.

#### admin_populatedefaultkinks
Resets the existing kinklist with hard coded kinks. Dangerous command.

#### admin_removekink (id)
Removes a kink from the kink lists. Dangerous command.

id: Kink id to remove. Removes it from the groups too. Does not remove it from peoples profiles

#### admin_removekinkgroup (id)
Removes a kink group from the system.

id: Kink group id to remove.

### Developer commands
Require developer or higher permission level to use. All dev commands use the format dev_. Intended for developers.
Don't use these commands unless you know exactly what you're doing.

#### dev_delete (command_id)
Deletes a command from the system.

command_id: ID of the command to be deleted.

#### dev_forcematch (target)
Forcefully match with a person. Used as a replacement for the /rp with [Optional] (User2) arg set as its phased out.

target: Target to match with.

#### dev_que
Shows the people in the matchmaker.

Notes: May be reclassified as a moderator or user command. Considered safe for general use.

#### dev_test
Test command for any on the fly purpose. Requires elevated permission level to use.
