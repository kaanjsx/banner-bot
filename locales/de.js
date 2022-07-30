module.exports = {
  help: {
    description_name: `Bot-Informationen`,
    description_value: (prefix) => `Bot-Präfix: "${prefix}"\nBot-Sprache: **"Deustch"** - :flag_de:`,
    cmds: {
      configuration: {
        name: "Konfigurationsbefehle",
        value: "`setlang`, `setprefix`"
      },
      information: {
        name: "Informationsbefehle",
        value: "`avatar`, `banner`, `guildbanner`, `guildicon`, `userinfo`, `help`"
      },
      support: {
        name: "Unterstützen Sie das Geisterbanner.",
        value: "`add`, `vote`"
      }
    }
  },
  avatar: (user, jpg = { size1, size2, size3 }, png = { size1, size2, size3 }, gif = { size1, size2, size3 }, webp = { size1, size2, size3 }) => `Hier ist das Profilbild von **${user.tag}**! \n\n **gif** [[512](${gif.size1})] [[1024](${gif.size2})] [[2048](${gif.size3})] \n **png** [[512](${png.size1})] [[1024](${png.size2})] [[2048](${png.size3})] \n **jpg** [[512](${jpg.size1})] [[1024](${jpg.size2})] [[2048](${jpg.size3})] \n **webp** [[512](${webp.size1})] [[1024](${webp.size2})] [[2048](${webp.size3})]`,
  add: (name, link) => `Wenn Sie **${name}** zu Ihrem Server hinzufügen und verwenden möchten, verwenden Sie [diesen Link](${link})`,
  random: `<a:randoms:931174906455015435> Zufälliger Avatar <a:randoms:931174906455015435>`,
   guildicon: (jpg = { size1, size2, size3 }, png = { size1, size2, size3 }, gif = { size1, size2, size3 }, webp = { size1, size2, size3 }) => `**gif** [[512](${gif.size1})] [[1024](${gif.size2})] [[2048](${gif.size3})] \n **png** [[512](${png.size1})] [[1024](${png.size2})] [[2048](${png.size3})] \n **jpg** [[512](${jpg.size1})] [[1024](${jpg.size2})] [[2048](${jpg.size3})] \n **webp** [[512](${webp.size1})] [[1024](${webp.size2})] [[2048](${webp.size3})]`,
   guild: {
    banner: {
      get: (name) => `Das Banner von ${name}`,
      not: "Der Server hat kein Banner."
    }
  },
  vote: (name) => `Hey hallo! Können Sie [Stimmen](https://top.gg/bot/797803769801736192) für die Entwicklung und Verwendung von ${name} abgeben?`,
  lang_choose: () => ":x: | Sie müssen eine Sprache auswählen\n\n:flag_gb: English (en)\n:flag_tr: Turkish (tr)\n:flag_fr: Français (fr)\n:flag_de: Deutsch (de)\n:flag_sa: Arabic (ar)",
  error: {
    type: (number) => {
      if (number == "1") {
        return {
          perm: () => "MANAGE_GUILD",
          send: () => `:x: Dazu benötigen Sie die Berechtigung **MANAGE_GUILD**!`
        }
      } else if (number == "2") {
        return {
          perm: () => "ADMINISTRATOR",
          send: () => `:x: Dazu benötigen Sie die Berechtigung **ADMINISTRATOR**!`
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
  prefix_choose: () => ":x: | Sie müssen ein Präfix schreiben!",
  prefix_changed: () => ":white_check_mark: | Sie haben Ihr Präfix erfolgreich geändert!",
  user_info: {
    get: (number) => {
      if (number == "1") {
        return {
          name: () => "Kontoinformation",
          value: (user, timestamp, badges, nitro) => {
            if (nitro) {
              return `**❯ Benutzerbild**: [Sehen](${user.displayAvatarURL({ dynamic: true })})\n**❯ ID:** ${user.id}\n**❯ Kontoalter:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>)\n**❯ Abzeichen:** ${badges} ${nitro}`
            } else {
              return `**❯ Benutzerbild**: [Sehen](${user.displayAvatarURL({ dynamic: true })})\n**❯ ID:** ${user.id}\n**❯ Kontoalter:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>)\n**❯ Abzeichen:** ${badges}`
            }
          }
        }
      }
    }
  },
  user: {
    banner: {
      get: (target) => `Hier ist das Profilbanner des Mitglieds **${target.user.tag}**!`,
      not: (target) => `Hier ist das Profilbanner des Mitglieds **${target.user.tag}**!`
    }
  }
};