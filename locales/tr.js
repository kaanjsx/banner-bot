module.exports = {
  help: {
    description_name: `Bot Bilgileri`,
    description_value: (prefix) => `Bot Ön Eki: "${prefix}"\nBot Dili: **"Türkçe"** - :flag_tr:`,
    cmds: {
      configuration: {
        name: "Yapılandırma Komutları",
        value: "`setlang`, `setprefix`"
      },
      information: {
        name: "Bilgi Komutları",
        value: "`avatar`, `banner`, `guildbanner`, `guildicon`, `userinfo`, `help`"
      },
      support: {
        name: "Ghost Banner'ı destekleyin.",
        value: "`add`, `vote`"
      }
    }
  },
  avatar: (user, jpg = { size1, size2, size3 }, png = { size1, size2, size3 }, gif = { size1, size2, size3 }, webp = { size1, size2, size3 }) => `Buyrun, **${user.tag}** üyesinin profil fotoğrafı! \n\n **gif** [[512](${gif.size1})] [[1024](${gif.size2})] [[2048](${gif.size3})] \n **png** [[512](${png.size1})] [[1024](${png.size2})] [[2048](${png.size3})] \n **jpg** [[512](${jpg.size1})] [[1024](${jpg.size2})] [[2048](${jpg.size3})] \n **webp** [[512](${webp.size1})] [[1024](${webp.size2})] [[2048](${webp.size3})]`,
  add: (name, link) => `**${name}**'u sunucuna ekleyip kullanmak istiyorsan [bu bağlantıyı](${link}) kullan`,
  random: `<a:randoms:931174906455015435> Rastgele Avatar <a:randoms:931174906455015435>`,
  vote: (name) => `Hey, Merhaba! ${name}'un gelişmesi ve kullanımı için [oy](https://top.gg/bot/797803769801736192) verir misin`,
 guildicon: (jpg = { size1, size2, size3 }, png = { size1, size2, size3 }, gif = { size1, size2, size3 }, webp = { size1, size2, size3 }) => `**gif** [[512](${gif.size1})] [[1024](${gif.size2})] [[2048](${gif.size3})] \n **png** [[512](${png.size1})] [[1024](${png.size2})] [[2048](${png.size3})] \n **jpg** [[512](${jpg.size1})] [[1024](${jpg.size2})] [[2048](${jpg.size3})] \n **webp** [[512](${webp.size1})] [[1024](${webp.size2})] [[2048](${webp.size3})]`,
   guild: {
    banner: {
      get: (name) => `${name}'nin Afişi`,
      not: "Sunucuda afiş bulunmamakta."
    }
  },
  user: {
    banner: {
      get: (target) => `Buyrun, **${target.user.tag}** üyesinin profil afişi!`,
      not: (target) => `Buyrun, **${target.user.tag}** üyesinin profil afişi!`
    }
  },
  error: {
    type: (number) => {
      if (number == "1") {
        return {
          perm: () => "MANAGE_GUILD",
          send: () => `:x: Bunu yapabilmek için **MANAGE_GUILD** yetkisine ihtiyacın var!`
        }
      } else if (number == "2") {
        return {
          perm: () => "ADMINISTRATOR",
          send: () => `:x: Bunu yapabilmek için **ADMINISTRATOR** yetkisine ihtiyacın var!`
        }
      }
    }
  },
  lang_choose: () => ":x: | Bir dil seçmelisin\n\n:flag_gb: English (en)\n:flag_tr: Turkish (tr)\n:flag_fr: Français (fr)\n:flag_de: Deutsch (de)\n:flag_sa: Arabic (ar)",
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
  prefix_choose: () => ":x: | Bir önek yazmalısınız!",
  prefix_changed: () => ":white_check_mark: | Ön ekinizi başarıyla değiştirdiniz!",
  user_info: {
    get: (number) => {
      if (number == "1") {
        return {
          name: () => "Hesap Bilgileri",
          value: (user, timestamp, badges, nitro) => {
            if (nitro) {
              return `**❯ Avatar**: [Gör](${user.displayAvatarURL({ dynamic: true })})\n**❯ ID:** ${user.id}\n**❯ Hesap yaşı:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>)\n**❯ Rozetleri:** ${badges} ${nitro}`
            } else {
              return `**❯ Avatar**: [Gör](${user.displayAvatarURL({ dynamic: true })})\n**❯ ID:** ${user.id}\n**❯ Hesap yaşı:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>)\n**❯ Rozetleri:** ${badges}`
            }
          }
        }
      }
    }
  }
};