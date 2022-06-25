const KEY = 'AIzaSyDnJDQu-1od9dKDqDtBOVaFoN_Q5wldLQo'
// const API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=';
// const url = API + KEY
const key = 'AIzaSyA2sygRuMKjY5kKR_c5_DlLJM0r5GLQlSA'
const API = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=40" + "&type=video&key=" + KEY + "&q="
// https://developers.google.com/youtube/v3/docs#ChannelSections=
const output = document.querySelector('#glav_l')

const API_channel = 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCSZ69a-0I1RRdNssyttBFcA&key=' + KEY

const getChannel = async(id_channel)=>{
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id_channel}&key= `+ KEY 
    const req = await fetch(url)
    const res1 = await req.json()
    // console.log(res1);
    // render(res1)
    return res1
}
const renderChannel = (info) => {
    info.items.map((el)=>{
        let p = document.createElement('p')
        p.innerHTML = el.snippet.thumbnails.medium.url
        card.append(p)
    })
}

const getVideo = async()=>{
    const url = API + KEY 
    const req = await fetch(API)
    const res = await req.json()
    console.log(res);
    renderVideo(res)
}
const renderVideo = (info) => {
    info.items.map((el)=>{
        let card = document.createElement('div')
        let card_image = document.createElement('img')
        let card_name = document.createElement('h6')
        card_name.innerHTML = el.snippet.title.slice(0,50)+'...'
        card_image.src = el.snippet.thumbnails.medium.url
        card.style.cssText =
        `
        display:flex;
        flex-direction: column;
        width:240px;
        // margin:5px;
        padding: 10px;
        `
        let info_channel = getChannel(el.snippet.channelId)
        console.log( info_channel + "45");
        //     let p = document.createElement('p')
        //     p.innerHTML = el_channel.snippet.thumbnails.medium.url
        //     card.append(p)
        // })
        card.append(card_image,card_name)
        output.append(card)
    })
}
getVideo()

// getChannel()