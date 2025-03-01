const urlArticle = (title, id) => {
    if (title) {
        var safeString = title.replace(/^\s+|\s+$/g, '').toLowerCase();

        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to   = "aaaaeeeeiiiioooouuuunc------";
        for (var i=0, l=from.length ; i<l ; i++) {
            safeString = safeString.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        safeString = safeString.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                         .replace(/\s+/g, '-') // collapse whitespace and replace by -
                         .replace(/-+/g, '-'); // collapse dashes

        const urlArticle = '/actualite/article/'+id+'/'+safeString
        
        return urlArticle;
      }
}

const resume = (content) => {
    if (content) {
        const resume = content.substr(0, 96)+'...'
        return resume;
      }
}

const dateMonthDay = (value) => {
    if (value) {
        const date = value.substr(5)
        return date;
    }
}

export default { urlArticle, resume, dateMonthDay}