module.exports = {
  help: {
    description_name: `Bot Information`,
    description_value: (prefix) => `Bot Prefix: "${prefix}"\nBot Language: **"English"** - :flag_gb:`,
    cmds: {
      configuration: {
        name: "Configuration Commands",
        value: "`setlang`, `setprefix`"
      },
      information: {
        name: "Information Commands",
        value: "`avatar`, `banner`, `guildbanner`, `guildicon`, `userinfo`, `help`"
      },
      support: {
        name: "Support the Ghost Banner.",
        value: "`add`, `vote`"
      }
    }
  },
  avatar: (user, jpg = { size1, size2, size3 }, png = { size1, size2, size3 }, gif = { size1, size2, size3 }, webp = { size1, size2, size3 }) => `Here's the profile picture of **${user.tag}**! \n\n **gif** [[512](${gif.size1})] [[1024](${gif.size2})] [[2048](${gif.size3})] \n **png** [[512](${png.size1})] [[1024](${png.size2})] [[2048](${png.size3})] \n **jpg** [[512](${jpg.size1})] [[1024](${jpg.size2})] [[2048](${jpg.size3})] \n **webp** [[512](${webp.size1})] [[1024](${webp.size2})] [[2048](${webp.size3})]`,
  add: (name, link) => `If you want to add **${name}** to your server and use it, use [this link](${link})`,
  random: `<a:randoms:931174906455015435> Random Avatar <a:randoms:931174906455015435>`,
   guildicon: (jpg = { size1, size2, size3 }, png = { size1, size2, size3 }, gif = { size1, size2, size3 }, webp = { size1, size2, size3 }) => `**gif** [[512](${gif.size1})] [[1024](${gif.size2})] [[2048](${gif.size3})] \n **png** [[512](${png.size1})] [[1024](${png.size2})] [[2048](${png.size3})] \n **jpg** [[512](${jpg.size1})] [[1024](${jpg.size2})] [[2048](${jpg.size3})] \n **webp** [[512](${webp.size1})] [[1024](${webp.size2})] [[2048](${webp.size3})]`,
   guild: {
    banner: {
      get: (name) => `${name}'s Banner`,
      not: "The server has no banner."
    }
  },
  vote: (name) => `Hey Hello! Can you give [votes](https://top.gg/bot/797803769801736192) for developing and using ${name}?`,
  lang_choose: () => ":x: | You must choose a language\n\n:flag_gb: English (en)\n:flag_tr: Turkish (tr)\n:flag_fr: Français (fr)\n:flag_de: Deutsch (de)\n:flag_sa: Arabic (ar)",
  error: {
    type: (number) => {
      if (number == "1") {
        return {
          perm: () => "MANAGE_GUILD",
          send: () => `:x: You need **MANAGE_GUILD** privilege to do this!`
        }
      } else if (number == "2") {
        return {
          perm: () => "ADMINISTRATOR",
          send: () => `:x: You need **ADMINISTRATOR** privilege to do this!`
        }
      }
    }
  },
  lang_changed: (lang) => {
    if (lang == "ar") {
      return ":white_check_mark: | تم تحديث اللغة!"
    } else if (lang == "de") {
      return ":white_check_mark: | Sprache wurde aktualisiert!"
    } else if (lang == "en") {
      return ":white_check_mark: | Language has beed updated!"
    } else if (lang == "fr") {
      return ":white_check_mark: | Langue mise à jour avec succès!"
    } else if (lang == "tr") {
      return ":white_check_mark: | Dil başarıyla güncellendi! "
    }
  },
  prefix_choose: () => ":x: | You must write a prefix!",
  prefix_changed: () => ":white_check_mark: | You have successfully changed your prefix!",
  user_info: {
    get: (number) => {
      if (number == "1") {
        return {
          name: () => "Account Information",
          value: (user, timestamp, badges, nitro) => {
            if (nitro) {
              return `**❯ Avatar**: [View](${user.displayAvatarURL({ dynamic: true })})\n**❯ ID:** ${user.id}\n**❯ Account Age:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>)\n**❯ Badges:** ${badges} ${nitro}`
            } else {
              return `**❯ Avatar**: [View](${user.displayAvatarURL({ dynamic: true })})\n**❯ ID:** ${user.id}\n**❯ Account Age:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>)\n**❯ Badges:** ${badges}`
            }
          }
        }
      }
    }
  },
  user: {
    banner: {
      get: (target) => `Here's the profile banner of **${target.user.tag}**!`,
      not: (target) => `Here's the profile banner of **${target.user.tag}**!`
    }
  }
};