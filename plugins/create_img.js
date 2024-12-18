const axios = require("axios");
module.exports = async (m, out, kyy, a) => {
    kyy.wait(m.key.remoteJid, a.key);
    let ai_img = (
        await axios.get(
            "https://widipe.com/v1/text2img?text=" +
                encodeURIComponent(out.input),
            { responseType: "arraybuffer" }
        )
    ).data;
    kyy.sendMessage(
        m.key.remoteJid,
        {
            image: ai_img
        },
        { quoted: a }
    );
};
