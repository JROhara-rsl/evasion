const urlArticle = (props) => {
    if (props) {
        const safeUrl = props.replace(/ /g, "-").replace(/@/g, "").replace(/ ?/g, "").replace(/ !/g, "").replace(/#/g, "").toLowerCase();
        const urlArticle = '/actualite/'+safeUrl
        return urlArticle;
      }
}

const resume = (props) => {
    if (props) {
        const resume = props.substr(0, 96)+'...'
        return resume;
      }
}

const dateMonthDay = (props) => {
    if (props) {
        const date = props.substr(5)
        return date;
    }
}

export default { urlArticle, resume, dateMonthDay}