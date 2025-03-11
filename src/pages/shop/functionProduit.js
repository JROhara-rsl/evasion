const urlProduit = (name, uuid) => {
    if (name) {
        /*var safeString = name.replace(/^\s+|\s+$/g, '').toLowerCase();

        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to   = "aaaaeeeeiiiioooouuuunc------";
        for (var i=0, l=from.length ; i<l ; i++) {
            safeString = safeString.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        safeString = safeString.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                         .replace(/\s+/g, '-') // collapse whitespace and replace by -
                         .replace(/-+/g, '-'); // collapse dashes*/

        const urlProduit = '/shop/item/'+name+'/'+uuid
        
        return urlProduit;
      }
}

export default { urlProduit}