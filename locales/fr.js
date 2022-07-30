module.exports = {
  help: {
    description_name: `Informations sur les robots`,
    description_value: (prefix) => `Préfixe de bot: "${prefix}"\nLangage Bot: **"Français"** - :flag_fr:`,
    cmds: {
      configuration: {
        name: "Commandes de configuration",
        value: "`setlang`, `setprefix`"
      },
      information: {
        name: "Commandes d'informations",
        value: "`avatar`, `banner`, `guildbanner`, `guildicon`, `userinfo`, `help`"
      },
      support: {
        name: "Soutenez la bannière fantôme.",
        value: "`add`, `vote`"
           }
    }
  },
  avatar: (user, jpg = { size1, size2, size3 }, png = { size1, size2, size3 }, gif = { size1, size2, size3 }, webp = { size1, size2, size3 }) => `Voici la photo de profil de **${user.tag}** ! \n\n **gif** [[512](${gif.size1})] [[1024](${gif.size2})] [[2048](${gif.size3})] \n **png** [[512](${png.size1})] [[1024](${png.size2})] [[2048](${png.size3})] \n **jpg** [[512](${jpg.size1})] [[1024](${jpg.size2})] [[2048](${jpg.size3})] \n **webp** [[512](${webp.size1})] [[1024](${webp.size2})] [[2048](${webp.size3})]`,
  add: (name, link) => `Si vous souhaitez ajouter **${name}** à votre serveur et l'utiliser, utilisez [ce lien](${link})`,
  random: `<a:randoms:931174906455015435> Avatar aléatoire <a:randoms:931174906455015435>`,
   vote: (name) => `Hey salut! Pouvez-vous donner [votes](https://top.gg/bot/797803769801736192) pour le développement et l'utilisation de ${name} ?`,
    guildicon: (jpg = { size1, size2, size3 }, png = { size1, size2, size3 }, gif = { size1, size2, size3 }, webp = { size1, size2, size3 }) => `**gif** [[512](${gif.size1})] [[1024](${gif.size2})] [[2048](${gif.size3})] \n **png** [[512](${png.size1})] [[1024](${png.size2})] [[2048](${png.size3})] \n **jpg** [[512](${jpg.size1})] [[1024](${jpg.size2})] [[2048](${jpg.size3})] \n **webp** [[512](${webp.size1})] [[1024](${webp.size2})] [[2048](${webp.size3})]`,
   guild: {
    banner: {
      get: (name) => `Bannière de ${name}`,
      not: "Le serveur n'a pas de bannière."
    }
  },
  lang_choose: () => ":x: | Vous devez choisir une langue\n\n:flag_gb: English (en)\n:flag_tr: Turkish (tr)\n:flag_fr: Français (fr)\n:flag_de: Deutsch (de)\n:flag_sa: Arabic (ar)",
  error: {
    type: (number) => {
      if (number == "1") {
        return {
          perm: () => "MANAGE_GUILD",
          send: () => `:x: Vous avez besoin du privilège **MANAGE_GUILD** pour le faire!`
        }
      } else if (number == "2") {
        return {
          perm: () => "ADMINISTRATOR",
          send: () => `:x: Vous avez besoin du privilège **ADMINISTRATOR** pour le faire!`
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
  prefix_choose: () => ":x: | Vous devez écrire un préfixe!",
  prefix_changed: () => ":white_check_mark: | Vous avez modifié votre préfixe avec succès!",
  user_info: {
    get: (number) => {
      if (number == "1") {
        return {
          name: () => "Informations de compte",
          value: (user, timestamp, badges, nitro) => {
            if (nitro) {
              return `**❯ Avatar**: [Voir](${user.displayAvatarURL({ dynamic: true })})\n**❯ ID:** ${user.id}\n**❯ Âge du compte:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>)\n**❯ Insignes:** ${badges} ${nitro}`
            } else {
              return `**❯ Avatar**: [Voir](${user.displayAvatarURL({ dynamic: true })})\n**❯ ID:** ${user.id}\n**❯ Âge du compte:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>)\n**❯ Insignes:** ${badges}`
            }
          }
        }
      }
    }
  },
  user: {
    banner: {
      get: (target) => `Voici l'affiche du profil de **${target.user.tag}**!`,
      not: (target) => `Voici l'affiche du profil de **${target.user.tag}**!`
    }
  }
};