const formatar = {
    ["none"]: function(string) {
        return string
    },
    ["capitalize"]: function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    ["uppercase"]: function(string) {
        return string.toUpperCase();
    },
    ["lowercase"]: function(string) {
        return string.toLowerCase();
    }
};

let lastReplaceId = 1;
let activeReplaces = [];
const createReplace = () => {
    let newReplace = "";
    newReplace += `<div onmouseenter="showDeleteReplace(${lastReplaceId})" onmouseleave="hideDeleteReplace(${lastReplaceId})" class="col-6" id="col_replace_search${lastReplaceId}"><div class="form-floating mb-2"><input type="text" class="form-control" id="replace_search${lastReplaceId}" placeholder=" "><label for="replace_search${lastReplaceId}">Search</label></div></div>`;
    newReplace += `<div onmouseenter="showDeleteReplace(${lastReplaceId})" onmouseleave="hideDeleteReplace(${lastReplaceId})" class="col-6" id="col_replace_replace${lastReplaceId}"><div class="form-floating mb-2"><button type="button" class="btn btn-danger btn-sm btn-remove-replace d-none" onclick="deleteReplace(${lastReplaceId})" id="removeReplace${lastReplaceId}"><i class="bi bi-trash3"></i></button><input type="text" class="form-control" id="replace_replace${lastReplaceId}" placeholder=" "><label for="replace_replace${lastReplaceId}">Replace</label></div></div>`;
    $('#replaceRow').append(newReplace);
    activeReplaces.push(lastReplaceId);
    lastReplaceId++;
}

function deleteReplace(cod) {
    $(`div#col_replace_search${cod}`).remove();
    $(`div#col_replace_replace${cod}`).remove();
    activeReplaces = activeReplaces.filter((value) => {
        return value != cod;
    });
}
function showDeleteReplace(cod) {
    if($(`button#removeReplace${cod}`).attr('class').includes('d-none')){
        $(`button#removeReplace${cod}`).removeClass('d-none');
    }
}
function hideDeleteReplace(cod) {
    if(!$(`button#removeReplace${cod}`).attr('class').includes('d-none')){
        $(`button#removeReplace${cod}`).addClass('d-none');
    }
}

$(document).ready(() => {

    createReplace();
    $('#addReplace').click(createReplace);
    
    $('#okBtn').click(() => {
        const string = document.querySelector('#string').value;
        const replaces = [];
        const lines = document.querySelector('#lines').value;
        const format = document.querySelector('#format_captalize').checked ? "capitalize" : document.querySelector('#format_uppercase').checked ? "uppercase" : document.querySelector('#format_lowercase').checked ? "lowercase" : "none"

        for(r of activeReplaces) {
            replaces.push({
                search: document.querySelector(`#replace_search${r}`).value,
                replace: document.querySelector(`#replace_replace${r}`).value,
            });
        }

        // obter parametros
        let newString = string;
        for(char of string) {
            for(r of replaces) {
                newString = newString.replace(r.search, r.replace);
            }
        }

        // gera resultado final
        let result = []
        for(str of newString.split('\n')) {
            let strFormatado = formatar[format](str);
            let newLine = lines
            for(char of lines) {
                newLine = newLine.replace('$', strFormatado);
            }
            result.push(newLine);
        }

        // renderiza o resultado
        let resultStr = ""
        for(r of result) {
            resultStr += r+"\n";
        }
        $('#textareaLines').val(resultStr);
    });

    $('#copiarBtn').click(() => {
        document.querySelector('#textareaLines').select();
        document.execCommand("copy");
        $('#copiarBtn').addClass("btn-success");
        $('#copiarBtn').html('<i class="bi bi-clipboard-check"></i>');
    });
    $('#okBtn').click(() => {
        $('#copiarBtn').removeClass("btn-success");
        $('#copiarBtn').html('<i class="bi bi-clipboard"></i>');
    });

});