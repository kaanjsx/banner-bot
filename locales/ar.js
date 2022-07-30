module.exports = {
  help: {
    description_name: `معلومات البوت`,
    description_value: (prefix) => `بادئة البوت: "${prefix}"\nلغة الروبوت: **"Arabic"** - :flag_sa:`,
    cmds: {
      configuration: {
        name: "أوامر التكوين",
        value: "`setlang`, `setprefix`"
      },
      information: {
        name: "أوامر المعلومات",
        value: "`avatar`, `banner`, `guildbanner`, `guildicon`, `userinfo`, `help`"
      },
      support: {
        name: "دعم راية الشبح.",
        value: "`add`, `vote`"
      }
    }
  },
  avatar: (user, jpg = { size1, size2, size3 }, png = { size1, size2, size3 }, gif = { size1, size2, size3 }, webp = { size1, size2, size3 }) => `ها هي صورة الملف الشخصي ل **${user.tag}**!\n\n **gif** [[512](${gif.size1})] [[1024](${gif.size2})] [[2048](${gif.size3})] \n **png** [[512](${png.size1})] [[1024](${png.size2})] [[2048](${png.size3})] \n **jpg** [[512](${jpg.size1})] [[1024](${jpg.size2})] [[2048](${jpg.size3})] \n **webp** [[512](${webp.size1})] [[1024](${webp.size2})] [[2048](${webp.size3})]`,
  add: (name, link) => `إذا كنت تريد إضافة **${name}** إلى خادمك واستخدامه ، فاستخدم [هذا الرابط](${link})`,
  random: `<a:randoms:931174906455015435> الصورة الرمزية العشوائية <a:randoms:931174906455015435>`,
   guildicon: (jpg = { size1, size2, size3 }, png = { size1, size2, size3 }, gif = { size1, size2, size3 }, webp = { size1, size2, size3 }) => `**gif** [[512](${gif.size1})] [[1024](${gif.size2})] [[2048](${gif.size3})] \n **png** [[512](${png.size1})] [[1024](${png.size2})] [[2048](${png.size3})] \n **jpg** [[512](${jpg.size1})] [[1024](${jpg.size2})] [[2048](${jpg.size3})] \n **webp** [[512](${webp.size1})] [[1024](${webp.size2})] [[2048](${webp.size3})]`,
  guild: {
    banner: {
      get: (name) => `ملصق ${name}`,
      not: "الخادم ليس لديه لافتة."
    }
  },
  vote: (name) => `يا مرحبا! هل يمكنك إعطاء [تصويتات](https://top.gg/bot/797803769801736192)  لتطوير واستخدام ${name}؟`,
  lang_choose: () => ":x: | يجب عليك اختيار لغة\n\n:flag_gb: English (en)\n:flag_tr: Turkish (tr)\n:flag_fr: Français (fr)\n:flag_de: Deutsch (de)\n:flag_sa: Arabic (ar)",
  error: {
    type: (number) => {
      if (number == "1") {
        return {
          perm: () => "MANAGE_GUILD",
          send: () => `:x: أنت بحاجة إلى امتياز **MANAGE_GUILD** للقيام بذلك!`
        }
      } else if (number == "2") {
        return {
          perm: () => "ADMINISTRATOR",
          send: () => `:x: أنت بحاجة إلى امتياز **ADMINISTRATOR** للقيام بذلك!`
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
  prefix_choose: () => ":x: | يجب عليك كتابة بادئة!",
  prefix_changed: () => ":white_check_mark: | لقد نجحت في تغيير البادئة الخاصة بك!",
  user_info: {
    get: (number) => {
      if (number == "1") {
        return {
          name: () => "معلومات الحساب",
          value: (user, timestamp, badges, nitro) => {
            if (nitro) {
              return `**❯ الصورة الرمزية**: [نرى](${user.displayAvatarURL({ dynamic: true })})\n**❯ ID:** ${user.id}\n**❯ عمر الحساب:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>)\n**❯ شارات:** ${badges} ${nitro}`
            } else {
              return `**❯ الصورة الرمزية**: [نرى](${user.displayAvatarURL({ dynamic: true })})\n**❯ ID:** ${user.id}\n**❯ عمر الحساب:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>)\n**❯ شارات:** ${badges}`
            }
          }
        }
      }
    }
  },
  user: {
    banner: {
      get: (target) => `إليك شعار الملف الشخصي للعضو **${target.user.tag}**!`,
      not: (target) => `إليك شعار الملف الشخصي للعضو **${target.user.tag}**!`
    }
  }
};