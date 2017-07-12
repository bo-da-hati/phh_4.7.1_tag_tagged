function escapeHtml(str) {
    if (!str) { return ''; }
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    return str;
}

// 分解された templates と values を順に完結( values は escapeHtml 関数でエスケープ)
function e(templates, ...values) {
    var result = '';
    for (let i = 0, len = templates.length; i < len; i++) {
        result += templates[i] + escapeHtml(values[i]);
    }
    return result;
}

// テンプレート文字列をエスケープ処理
var name = '<"Mario" & \'Luigi\'>';
