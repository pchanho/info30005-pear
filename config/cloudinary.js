var cloudinary = require("cloudinary");
cloudinary.config({
    cloud_name: 'drvfo389c',
    api_key: '313182327497513',
    api_secret: 'mXEiPcfHOlFtlB8eRQSAH6h6j18'
});

var upload =  async function(file) {
    await cloudinary.v2.uploader.upload(file.tempFilePath, (error, result) => {
        if(result)
        {
            console.log("found")
            console.log(result.url)
            return result.url
        } else if(error) {
            return error
        }
})
}


module.exports = {
    upload
};