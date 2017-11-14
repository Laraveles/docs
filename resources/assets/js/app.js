/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/* http://prismjs.com/download.html?themes=prism&languages=markup+twig+css+clike+javascript+php+php-extras+scss+bash+sql+apacheconf+git+handlebars&plugins=line-numbers */
self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {};
var Prism = function () {
    var e = /\blang(?:uage)?-(?!\*)(\w+)\b/i, t = self.Prism = {
        util: {
            encode: function (e) {
                return e instanceof n ? new n(e.type, t.util.encode(e.content), e.alias) : "Array" === t.util.type(e) ? e.map(t.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
            }, type: function (e) {
                return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
            }, clone: function (e) {
                var n = t.util.type(e);
                switch (n) {
                    case"Object":
                        var a = {};
                        for (var r in e) e.hasOwnProperty(r) && (a[r] = t.util.clone(e[r]));
                        return a;
                    case"Array":
                        return e.map(function (e) {
                            return t.util.clone(e)
                        })
                }
                return e
            }
        }, languages: {
            extend: function (e, n) {
                var a = t.util.clone(t.languages[e]);
                for (var r in n) a[r] = n[r];
                return a
            }, insertBefore: function (e, n, a, r) {
                r = r || t.languages;
                var i = r[e];
                if (2 == arguments.length) {
                    a = arguments[1];
                    for (var l in a) a.hasOwnProperty(l) && (i[l] = a[l]);
                    return i
                }
                var o = {};
                for (var s in i) if (i.hasOwnProperty(s)) {
                    if (s == n) for (var l in a) a.hasOwnProperty(l) && (o[l] = a[l]);
                    o[s] = i[s]
                }
                return t.languages.DFS(t.languages, function (t, n) {
                    n === r[e] && t != e && (this[t] = o)
                }), r[e] = o
            }, DFS: function (e, n, a) {
                for (var r in e) e.hasOwnProperty(r) && (n.call(e, r, e[r], a || r), "Object" === t.util.type(e[r]) ? t.languages.DFS(e[r], n) : "Array" === t.util.type(e[r]) && t.languages.DFS(e[r], n, r))
            }
        }, highlightAll: function (e, n) {
            for (var a, r = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'), i = 0; a = r[i++];) t.highlightElement(a, e === !0, n)
        }, highlightElement: function (a, r, i) {
            for (var l, o, s = a; s && !e.test(s.className);) s = s.parentNode;
            if (s && (l = (s.className.match(e) || [, ""])[1], o = t.languages[l]), o) {
                a.className = a.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l, s = a.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l);
                var g = a.textContent;
                if (g) {
                    g = g.replace(/^(?:\r?\n|\r)/, "");
                    var u = {element: a, language: l, grammar: o, code: g};
                    if (t.hooks.run("before-highlight", u), r && self.Worker) {
                        var c = new Worker(t.filename);
                        c.onmessage = function (e) {
                            u.highlightedCode = n.stringify(JSON.parse(e.data), l), t.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, i && i.call(u.element), t.hooks.run("after-highlight", u)
                        }, c.postMessage(JSON.stringify({language: u.language, code: u.code}))
                    } else u.highlightedCode = t.highlight(u.code, u.grammar, u.language), t.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, i && i.call(a), t.hooks.run("after-highlight", u)
                }
            }
        }, highlight: function (e, a, r) {
            var i = t.tokenize(e, a);
            return n.stringify(t.util.encode(i), r)
        }, tokenize: function (e, n) {
            var a = t.Token, r = [e], i = n.rest;
            if (i) {
                for (var l in i) n[l] = i[l];
                delete n.rest
            }
            e:for (var l in n) if (n.hasOwnProperty(l) && n[l]) {
                var o = n[l];
                o = "Array" === t.util.type(o) ? o : [o];
                for (var s = 0; s < o.length; ++s) {
                    var g = o[s], u = g.inside, c = !!g.lookbehind, f = 0, h = g.alias;
                    g = g.pattern || g;
                    for (var p = 0; p < r.length; p++) {
                        var d = r[p];
                        if (r.length > e.length) break e;
                        if (!(d instanceof a)) {
                            g.lastIndex = 0;
                            var m = g.exec(d);
                            if (m) {
                                c && (f = m[1].length);
                                var y = m.index - 1 + f, m = m[0].slice(f), v = m.length, k = y + v, b = d.slice(0, y + 1),
                                    w = d.slice(k + 1), O = [p, 1];
                                b && O.push(b);
                                var N = new a(l, u ? t.tokenize(m, u) : m, h);
                                O.push(N), w && O.push(w), Array.prototype.splice.apply(r, O)
                            }
                        }
                    }
                }
            }
            return r
        }, hooks: {
            all: {}, add: function (e, n) {
                var a = t.hooks.all;
                a[e] = a[e] || [], a[e].push(n)
            }, run: function (e, n) {
                var a = t.hooks.all[e];
                if (a && a.length) for (var r, i = 0; r = a[i++];) r(n)
            }
        }
    }, n = t.Token = function (e, t, n) {
        this.type = e, this.content = t, this.alias = n
    };
    if (n.stringify = function (e, a, r) {
            if ("string" == typeof e) return e;
            if ("[object Array]" == Object.prototype.toString.call(e)) return e.map(function (t) {
                return n.stringify(t, a, e)
            }).join("");
            var i = {
                type: e.type,
                content: n.stringify(e.content, a, r),
                tag: "span",
                classes: ["token", e.type],
                attributes: {},
                language: a,
                parent: r
            };
            if ("comment" == i.type && (i.attributes.spellcheck = "true"), e.alias) {
                var l = "Array" === t.util.type(e.alias) ? e.alias : [e.alias];
                Array.prototype.push.apply(i.classes, l)
            }
            t.hooks.run("wrap", i);
            var o = "";
            for (var s in i.attributes) o += s + '="' + (i.attributes[s] || "") + '"';
            return "<" + i.tag + ' class="' + i.classes.join(" ") + '" ' + o + ">" + i.content + "</" + i.tag + ">"
        }, !self.document) return self.addEventListener ? (self.addEventListener("message", function (e) {
        var n = JSON.parse(e.data), a = n.language, r = n.code;
        self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r, t.languages[a])))), self.close()
    }, !1), self.Prism) : self.Prism;
    var a = document.getElementsByTagName("script");
    return a = a[a.length - 1], a && (t.filename = a.src, document.addEventListener && !a.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", t.highlightAll)), self.Prism
}();
"undefined" != typeof module && module.exports && (module.exports = Prism);
;
Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/g,
    prolog: /<\?.+?\?>/,
    doctype: /<!DOCTYPE.+?>/,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
        pattern: /<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,
        inside: {
            tag: {pattern: /^<\/?[\w:-]+/i, inside: {punctuation: /^<\/?/, namespace: /^[\w-]+?:/}},
            "attr-value": {pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi, inside: {punctuation: /=|>|"/g}},
            punctuation: /\/?>/g,
            "attr-name": {pattern: /[\w:-]+/g, inside: {namespace: /^[\w-]+?:/}}
        }
    },
    entity: /&#?[\da-z]{1,8};/gi
}, Prism.hooks.add("wrap", function (t) {
    "entity" === t.type && (t.attributes.title = t.content.replace(/&amp;/, "&"))
});
;
Prism.languages.twig = {
    comment: /\{#[\s\S]*?#\}/g,
    tag: {
        pattern: /(\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\})/g,
        inside: {
            ld: {pattern: /^(\{\{\-?|\{%\-?\s*\w+)/, inside: {punctuation: /^(\{\{|\{%)\-?/, keyword: /\w+/}},
            rd: {pattern: /\-?(%\}|\}\})$/, inside: {punctuation: /.*/}},
            string: {pattern: /("|')(\\?.)*?\1/g, inside: {punctuation: /^('|")|('|")$/g}},
            keyword: /\b(if)\b/g,
            "boolean": /\b(true|false|null)\b/g,
            number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
            operator: /==|=|!=|<|>|>=|<=|\+|\-|~|\*|\/|\/\/|%|\*\*|\|/g,
            "space-operator": {
                pattern: /(\s)(\b(not|b\-and|b\-xor|b\-or|and|or|in|matches|starts with|ends with|is)\b|\?|:|\?:)(?=\s)/g,
                lookbehind: !0,
                inside: {operator: /.*/}
            },
            property: /\b[a-zA-Z_][a-zA-Z0-9_]*\b/g,
            punctuation: /\(|\)|\[\]|\[|\]|\{|\}|:|\.|,/g
        }
    },
    other: {pattern: /[\s\S]*/, inside: Prism.languages.markup}
};
;
Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//g,
    atrule: {pattern: /@[\w-]+?.*?(;|(?=\s*\{))/gi, inside: {punctuation: /[;:]/g}},
    url: /url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/gi,
    selector: /[^\{\}\s][^\{\};]*(?=\s*\{)/g,
    string: /("|')(\\\n|\\?.)*?\1/g,
    property: /(\b|\B)[\w-]+(?=\s*:)/gi,
    important: /\B!important\b/gi,
    punctuation: /[\{\};:]/g,
    "function": /[-a-z0-9]+(?=\()/gi
}, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /<style[\w\W]*?>[\w\W]*?<\/style>/gi,
        inside: {tag: {pattern: /<style[\w\W]*?>|<\/style>/gi, inside: Prism.languages.markup.tag.inside}, rest: Prism.languages.css},
        alias: "language-css"
    }
}), Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|').+?\1/gi,
        inside: {
            "attr-name": {pattern: /^\s*style/gi, inside: Prism.languages.markup.tag.inside},
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {pattern: /.+/gi, inside: Prism.languages.css}
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag));
;
Prism.languages.clike = {
    comment: [{pattern: /(^|[^\\])\/\*[\w\W]*?\*\//g, lookbehind: !0}, {
        pattern: /(^|[^\\:])\/\/.*?(\r?\n|$)/g,
        lookbehind: !0
    }],
    string: /("|')(\\\n|\\?.)*?\1/g,
    "class-name": {
        pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,
        lookbehind: !0,
        inside: {punctuation: /(\.|\\)/}
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,
    "boolean": /\b(true|false)\b/g,
    "function": {pattern: /[a-z0-9_]+\(/gi, inside: {punctuation: /\(/}},
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
    operator: /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/g,
    ignore: /&(lt|gt|amp);/gi,
    punctuation: /[{}[\];(),.:]/g
};
;
Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g,
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/g,
    "function": /(?!\d)[a-z0-9_$]+(?=\()/gi
}), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
        lookbehind: !0
    }
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/gi,
        inside: {
            tag: {pattern: /<script[\w\W]*?>|<\/script>/gi, inside: Prism.languages.markup.tag.inside},
            rest: Prism.languages.javascript
        },
        alias: "language-javascript"
    }
});
;
Prism.languages.php = Prism.languages.extend("clike", {
    keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/gi,
    constant: /\b[A-Z0-9_]{2,}\b/g,
    comment: {pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])(\/\/|#).*?(\r?\n|$))/g, lookbehind: !0}
}), Prism.languages.insertBefore("php", "keyword", {
    delimiter: /(\?>|<\?php|<\?)/gi,
    variable: /(\$\w+)\b/gi,
    "package": {pattern: /(\\|namespace\s+|use\s+)[\w\\]+/g, lookbehind: !0, inside: {punctuation: /\\/}}
}), Prism.languages.insertBefore("php", "operator", {
    property: {
        pattern: /(->)[\w]+/g,
        lookbehind: !0
    }
}), Prism.languages.markup && (Prism.hooks.add("before-highlight", function (e) {
    "php" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi, function (n) {
        return e.tokenStack.push(n), "{{{PHP" + e.tokenStack.length + "}}}"
    }))
}), Prism.hooks.add("before-insert", function (e) {
    "php" === e.language && (e.code = e.backupCode, delete e.backupCode)
}), Prism.hooks.add("after-highlight", function (e) {
    if ("php" === e.language) {
        for (var n, a = 0; n = e.tokenStack[a]; a++) e.highlightedCode = e.highlightedCode.replace("{{{PHP" + (a + 1) + "}}}", Prism.highlight(n, e.grammar, "php"));
        e.element.innerHTML = e.highlightedCode
    }
}), Prism.hooks.add("wrap", function (e) {
    "php" === e.language && "markup" === e.type && (e.content = e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'))
}), Prism.languages.insertBefore("php", "comment", {
    markup: {pattern: /<[^?]\/?(.*?)>/g, inside: Prism.languages.markup},
    php: /\{\{\{PHP[0-9]+\}\}\}/g
}));
;
Prism.languages.insertBefore("php", "variable", {
    "this": /\$this/g,
    global: /\$_?(GLOBALS|SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/g,
    scope: {pattern: /\b[\w\\]+::/g, inside: {keyword: /(static|self|parent)/, punctuation: /(::|\\)/}}
});
;
Prism.languages.scss = Prism.languages.extend("css", {
    comment: {pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g, lookbehind: !0},
    atrule: /@[\w-]+(?=\s+(\(|\{|;))/gi,
    url: /([-a-z]+-)*url(?=\()/gi,
    selector: /([^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/gm
}), Prism.languages.insertBefore("scss", "atrule", {keyword: /@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)|(?=@for\s+\$[-_\w]+\s)+from/i}), Prism.languages.insertBefore("scss", "property", {variable: /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i}), Prism.languages.insertBefore("scss", "function", {
    placeholder: /%[-_\w]+/i,
    statement: /\B!(default|optional)\b/gi,
    "boolean": /\b(true|false)\b/g,
    "null": /\b(null)\b/g,
    operator: /\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|%)\s+/g
});
;
Prism.languages.bash = Prism.languages.extend("clike", {
    comment: {pattern: /(^|[^"{\\])(#.*?(\r?\n|$))/g, lookbehind: !0},
    string: {pattern: /("|')(\\?[\s\S])*?\1/g, inside: {property: /\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^\}]+\})/g}},
    keyword: /\b(if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)\b/g
}), Prism.languages.insertBefore("bash", "keyword", {property: /\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^}]+\})/g}), Prism.languages.insertBefore("bash", "comment", {important: /(^#!\s*\/bin\/bash)|(^#!\s*\/bin\/sh)/g});
;
Prism.languages.sql = {
    comment: {pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|((--)|(\/\/)|#).*?(\r?\n|$))/g, lookbehind: !0},
    string: {pattern: /(^|[^@])("|')(\\?[\s\S])*?\2/g, lookbehind: !0},
    variable: /@[\w.$]+|@("|'|`)(\\?[\s\S])+?\1/g,
    "function": /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/gi,
    keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALTER|ANALYZE|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADE|CASCADED|CASE|CHAIN|CHAR VARYING|CHARACTER VARYING|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DOUBLE PRECISION|DROP|DUMMY|DUMP|DUMPFILE|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE|ESCAPED BY|EXCEPT|EXEC|EXECUTE|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR|FOR EACH ROW|FORCE|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GEOMETRY|GEOMETRYCOLLECTION|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY|IDENTITY_INSERT|IDENTITYCOL|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEY|KEYS|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONGBLOB|LONGTEXT|MATCH|MATCHED|MEDIUMBLOB|MEDIUMINT|MEDIUMTEXT|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTILINESTRING|MULTIPOINT|MULTIPOLYGON|NATIONAL|NATIONAL CHAR VARYING|NATIONAL CHARACTER|NATIONAL CHARACTER VARYING|NATIONAL VARCHAR|NATURAL|NCHAR|NCHAR VARCHAR|NEXT|NO|NO SQL|NOCHECK|NOCYCLE|NONCLUSTERED|NULLIF|NUMERIC|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPTIMIZE|OPTION|OPTIONALLY|ORDER|OUT|OUTER|OUTFILE|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC|PROCEDURE|PUBLIC|PURGE|QUICK|RAISERROR|READ|READS SQL DATA|READTEXT|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURN|RETURNS|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROWCOUNT|ROWGUIDCOL|ROWS?|RTREE|RULE|SAVE|SAVEPOINT|SCHEMA|SELECT|SERIAL|SERIALIZABLE|SESSION|SESSION_USER|SET|SETUSER|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START|STARTING BY|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLE|TABLES|TABLESPACE|TEMP(?:ORARY)?|TEMPTABLE|TERMINATED BY|TEXT|TEXTSIZE|THEN|TIMESTAMP|TINYBLOB|TINYINT|TINYTEXT|TO|TOP|TRAN|TRANSACTION|TRANSACTIONS|TRIGGER|TRUNCATE|TSEQUAL|TYPE|TYPES|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNPIVOT|UPDATE|UPDATETEXT|USAGE|USE|USER|USING|VALUE|VALUES|VARBINARY|VARCHAR|VARCHARACTER|VARYING|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH|WITH ROLLUP|WITHIN|WORK|WRITE|WRITETEXT)\b/gi,
    "boolean": /\b(?:TRUE|FALSE|NULL)\b/gi,
    number: /\b-?(0x)?\d*\.?[\da-f]+\b/g,
    operator: /\b(?:ALL|AND|ANY|BETWEEN|EXISTS|IN|LIKE|NOT|OR|IS|UNIQUE|CHARACTER SET|COLLATE|DIV|OFFSET|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b|[-+]{1}|!|[=<>]{1,2}|(&){1,2}|\|?\||\?|\*|\//gi,
    punctuation: /[;[\]()`,.]/g
};
;
Prism.languages.apacheconf = {
    comment: /#.*/g,
    "directive-inline": {
        pattern: /^\s*\b(AcceptFilter|AcceptPathInfo|AccessFileName|Action|AddAlt|AddAltByEncoding|AddAltByType|AddCharset|AddDefaultCharset|AddDescription|AddEncoding|AddHandler|AddIcon|AddIconByEncoding|AddIconByType|AddInputFilter|AddLanguage|AddModuleInfo|AddOutputFilter|AddOutputFilterByType|AddType|Alias|AliasMatch|Allow|AllowCONNECT|AllowEncodedSlashes|AllowMethods|AllowOverride|AllowOverrideList|Anonymous|Anonymous_LogEmail|Anonymous_MustGiveEmail|Anonymous_NoUserID|Anonymous_VerifyEmail|AsyncRequestWorkerFactor|AuthBasicAuthoritative|AuthBasicFake|AuthBasicProvider|AuthBasicUseDigestAlgorithm|AuthDBDUserPWQuery|AuthDBDUserRealmQuery|AuthDBMGroupFile|AuthDBMType|AuthDBMUserFile|AuthDigestAlgorithm|AuthDigestDomain|AuthDigestNonceLifetime|AuthDigestProvider|AuthDigestQop|AuthDigestShmemSize|AuthFormAuthoritative|AuthFormBody|AuthFormDisableNoStore|AuthFormFakeBasicAuth|AuthFormLocation|AuthFormLoginRequiredLocation|AuthFormLoginSuccessLocation|AuthFormLogoutLocation|AuthFormMethod|AuthFormMimetype|AuthFormPassword|AuthFormProvider|AuthFormSitePassphrase|AuthFormSize|AuthFormUsername|AuthGroupFile|AuthLDAPAuthorizePrefix|AuthLDAPBindAuthoritative|AuthLDAPBindDN|AuthLDAPBindPassword|AuthLDAPCharsetConfig|AuthLDAPCompareAsUser|AuthLDAPCompareDNOnServer|AuthLDAPDereferenceAliases|AuthLDAPGroupAttribute|AuthLDAPGroupAttributeIsDN|AuthLDAPInitialBindAsUser|AuthLDAPInitialBindPattern|AuthLDAPMaxSubGroupDepth|AuthLDAPRemoteUserAttribute|AuthLDAPRemoteUserIsDN|AuthLDAPSearchAsUser|AuthLDAPSubGroupAttribute|AuthLDAPSubGroupClass|AuthLDAPUrl|AuthMerging|AuthName|AuthnCacheContext|AuthnCacheEnable|AuthnCacheProvideFor|AuthnCacheSOCache|AuthnCacheTimeout|AuthnzFcgiCheckAuthnProvider|AuthnzFcgiDefineProvider|AuthType|AuthUserFile|AuthzDBDLoginToReferer|AuthzDBDQuery|AuthzDBDRedirectQuery|AuthzDBMType|AuthzSendForbiddenOnFailure|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|CacheDefaultExpire|CacheDetailHeader|CacheDirLength|CacheDirLevels|CacheDisable|CacheEnable|CacheFile|CacheHeader|CacheIgnoreCacheControl|CacheIgnoreHeaders|CacheIgnoreNoLastMod|CacheIgnoreQueryString|CacheIgnoreURLSessionIdentifiers|CacheKeyBaseURL|CacheLastModifiedFactor|CacheLock|CacheLockMaxAge|CacheLockPath|CacheMaxExpire|CacheMaxFileSize|CacheMinExpire|CacheMinFileSize|CacheNegotiatedDocs|CacheQuickHandler|CacheReadSize|CacheReadTime|CacheRoot|CacheSocache|CacheSocacheMaxSize|CacheSocacheMaxTime|CacheSocacheMinTime|CacheSocacheReadSize|CacheSocacheReadTime|CacheStaleOnError|CacheStoreExpired|CacheStoreNoStore|CacheStorePrivate|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|DeflateBufferSize|DeflateCompressionLevel|DeflateFilterNote|DeflateInflateLimitRequestBody|DeflateInflateRatioBurst|DeflateInflateRatioLimit|DeflateMemLevel|DeflateWindowSize|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|HeartbeatAddress|HeartbeatListen|HeartbeatMaxServers|HeartbeatStorage|HeartbeatStorage|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|IndexHeadInsert|IndexIgnore|IndexIgnoreReset|IndexOptions|IndexOrderDefault|IndexStyleSheet|InputSed|ISAPIAppendLogToErrors|ISAPIAppendLogToQuery|ISAPICacheFile|ISAPIFakeAsync|ISAPILogNotSupported|ISAPIReadAheadBuffer|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAPCacheEntries|LDAPCacheTTL|LDAPConnectionPoolTTL|LDAPConnectionTimeout|LDAPLibraryDebug|LDAPOpCacheEntries|LDAPOpCacheTTL|LDAPReferralHopLimit|LDAPReferrals|LDAPRetries|LDAPRetryDelay|LDAPSharedCacheFile|LDAPSharedCacheSize|LDAPTimeout|LDAPTrustedClientCert|LDAPTrustedGlobalCert|LDAPTrustedMode|LDAPVerifyServerCert|LimitInternalRecursion|LimitRequestBody|LimitRequestFields|LimitRequestFieldSize|LimitRequestLine|LimitXMLRequestBody|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|LuaHookAccessChecker|LuaHookAuthChecker|LuaHookCheckUserID|LuaHookFixups|LuaHookInsertFilter|LuaHookLog|LuaHookMapToStorage|LuaHookTranslateName|LuaHookTypeChecker|LuaInherit|LuaInputFilter|LuaMapHandler|LuaOutputFilter|LuaPackageCPath|LuaPackagePath|LuaQuickHandler|LuaRoot|LuaScope|MaxConnectionsPerChild|MaxKeepAliveRequests|MaxMemFree|MaxRangeOverlaps|MaxRangeReversals|MaxRanges|MaxRequestWorkers|MaxSpareServers|MaxSpareThreads|MaxThreads|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|ProxyAddHeaders|ProxyBadHeader|ProxyBlock|ProxyDomain|ProxyErrorOverride|ProxyExpressDBMFile|ProxyExpressDBMType|ProxyExpressEnable|ProxyFtpDirCharset|ProxyFtpEscapeWildcards|ProxyFtpListOnWildcard|ProxyHTMLBufSize|ProxyHTMLCharsetOut|ProxyHTMLDocType|ProxyHTMLEnable|ProxyHTMLEvents|ProxyHTMLExtended|ProxyHTMLFixups|ProxyHTMLInterp|ProxyHTMLLinks|ProxyHTMLMeta|ProxyHTMLStripComments|ProxyHTMLURLMap|ProxyIOBufferSize|ProxyMaxForwards|ProxyPass|ProxyPassInherit|ProxyPassInterpolateEnv|ProxyPassMatch|ProxyPassReverse|ProxyPassReverseCookieDomain|ProxyPassReverseCookiePath|ProxyPreserveHost|ProxyReceiveBufferSize|ProxyRemote|ProxyRemoteMatch|ProxyRequests|ProxySCGIInternalRedirect|ProxySCGISendfile|ProxySet|ProxySourceAddress|ProxyStatus|ProxyTimeout|ProxyVia|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIPHeader|RemoteIPInternalProxy|RemoteIPInternalProxyList|RemoteIPProxiesHeader|RemoteIPTrustedProxy|RemoteIPTrustedProxyList|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|RewriteBase|RewriteCond|RewriteEngine|RewriteMap|RewriteOptions|RewriteRule|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script|ScriptAlias|ScriptAliasMatch|ScriptInterpreterSource|ScriptLog|ScriptLogBuffer|ScriptLogLength|ScriptSock|SecureListen|SeeRequestTail|SendBufferSize|ServerAdmin|ServerAlias|ServerLimit|ServerName|ServerPath|ServerRoot|ServerSignature|ServerTokens|Session|SessionCookieName|SessionCookieName2|SessionCookieRemove|SessionCryptoCipher|SessionCryptoDriver|SessionCryptoPassphrase|SessionCryptoPassphraseFile|SessionDBDCookieName|SessionDBDCookieName2|SessionDBDCookieRemove|SessionDBDDeleteLabel|SessionDBDInsertLabel|SessionDBDPerUser|SessionDBDSelectLabel|SessionDBDUpdateLabel|SessionEnv|SessionExclude|SessionHeader|SessionInclude|SessionMaxAge|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSLCACertificateFile|SSLCACertificatePath|SSLCADNRequestFile|SSLCADNRequestPath|SSLCARevocationCheck|SSLCARevocationFile|SSLCARevocationPath|SSLCertificateChainFile|SSLCertificateFile|SSLCertificateKeyFile|SSLCipherSuite|SSLCompression|SSLCryptoDevice|SSLEngine|SSLFIPS|SSLHonorCipherOrder|SSLInsecureRenegotiation|SSLOCSPDefaultResponder|SSLOCSPEnable|SSLOCSPOverrideResponder|SSLOCSPResponderTimeout|SSLOCSPResponseMaxAge|SSLOCSPResponseTimeSkew|SSLOCSPUseRequestNonce|SSLOpenSSLConfCmd|SSLOptions|SSLPassPhraseDialog|SSLProtocol|SSLProxyCACertificateFile|SSLProxyCACertificatePath|SSLProxyCARevocationCheck|SSLProxyCARevocationFile|SSLProxyCARevocationPath|SSLProxyCheckPeerCN|SSLProxyCheckPeerExpire|SSLProxyCheckPeerName|SSLProxyCipherSuite|SSLProxyEngine|SSLProxyMachineCertificateChainFile|SSLProxyMachineCertificateFile|SSLProxyMachineCertificatePath|SSLProxyProtocol|SSLProxyVerify|SSLProxyVerifyDepth|SSLRandomSeed|SSLRenegBufferSize|SSLRequire|SSLRequireSSL|SSLSessionCache|SSLSessionCacheTimeout|SSLSessionTicketKeyFile|SSLSRPUnknownUserSeed|SSLSRPVerifierFile|SSLStaplingCache|SSLStaplingErrorCacheTimeout|SSLStaplingFakeTryLater|SSLStaplingForceURL|SSLStaplingResponderTimeout|SSLStaplingResponseMaxAge|SSLStaplingResponseTimeSkew|SSLStaplingReturnResponderErrors|SSLStaplingStandardCacheTimeout|SSLStrictSNIVHostCheck|SSLUserName|SSLUseStapling|SSLVerifyClient|SSLVerifyDepth|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|VirtualDocumentRoot|VirtualDocumentRootIP|VirtualScriptAlias|VirtualScriptAliasIP|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/gim,
        alias: "property"
    },
    "directive-block": {
        pattern: /<\/?\b(AuthnProviderAlias|AuthzProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|RequireAll|RequireAny|RequireNone|VirtualHost)\b *.*>/gi,
        inside: {
            "directive-block": {pattern: /^<\/?\w+/, inside: {punctuation: /^<\/?/}, alias: "tag"},
            "directive-block-parameter": {
                pattern: /.*[^>]/,
                inside: {punctuation: /:/, string: {pattern: /("|').*\1/g, inside: {variable: /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/g}}},
                alias: "attr-value"
            },
            punctuation: />/
        },
        alias: "tag"
    },
    "directive-flags": {pattern: /\[(\w,?)+\]/g, alias: "keyword"},
    string: {pattern: /("|').*\1/g, inside: {variable: /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/g}},
    variable: /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/g,
    regex: /\^?.*\$|\^.*\$?/g
};
;
Prism.languages.git = {
    comment: /^#.*$/m,
    string: /("|')(\\?.)*?\1/gm,
    command: {pattern: /^.*\$ git .*$/m, inside: {parameter: /\s(--|-)\w+/m}},
    coord: /^@@.*@@$/m,
    deleted: /^-(?!-).+$/m,
    inserted: /^\+(?!\+).+$/m,
    commit_sha1: /^commit \w{40}$/m
};
;
!function (e) {
    var a = /\{\{\{[\w\W]+?\}\}\}|\{\{[\w\W]+?\}\}/g;
    e.languages.handlebars = e.languages.extend("markup", {
        handlebars: {
            pattern: a,
            inside: {
                delimiter: {pattern: /^\{\{\{?|\}\}\}?$/gi, alias: "punctuation"},
                string: /(["'])(\\?.)+?\1/g,
                number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
                "boolean": /\b(true|false)\b/g,
                block: {pattern: /^(\s*~?\s*)[#\/]\w+/gi, lookbehind: !0, alias: "keyword"},
                brackets: {pattern: /\[[^\]]+\]/, inside: {punctuation: /\[|\]/g, variable: /[\w\W]+/g}},
                punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/g,
                variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/g
            }
        }
    }), e.languages.insertBefore("handlebars", "tag", {
        "handlebars-comment": {
            pattern: /\{\{![\w\W]*?\}\}/g,
            alias: ["handlebars", "comment"]
        }
    }), e.hooks.add("before-highlight", function (e) {
        "handlebars" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(a, function (a) {
            return e.tokenStack.push(a), "___HANDLEBARS" + e.tokenStack.length + "___"
        }))
    }), e.hooks.add("before-insert", function (e) {
        "handlebars" === e.language && (e.code = e.backupCode, delete e.backupCode)
    }), e.hooks.add("after-highlight", function (a) {
        if ("handlebars" === a.language) {
            for (var n, t = 0; n = a.tokenStack[t]; t++) a.highlightedCode = a.highlightedCode.replace("___HANDLEBARS" + (t + 1) + "___", e.highlight(n, a.grammar, "handlebars"));
            a.element.innerHTML = a.highlightedCode
        }
    })
}(Prism);
;
Prism.hooks.add("after-highlight", function (e) {
    var n = e.element.parentNode;
    if (n && /pre/i.test(n.nodeName) && -1 !== n.className.indexOf("line-numbers")) {
        var t, a = 1 + e.code.split("\n").length;
        lines = new Array(a), lines = lines.join("<span></span>"), t = document.createElement("span"), t.className = "line-numbers-rows", t.innerHTML = lines, n.hasAttribute("data-start") && (n.style.counterReset = "linenumber " + (parseInt(n.getAttribute("data-start"), 10) - 1)), e.element.appendChild(t)
    }
});
;

// jQuery core
// window.jQuery = window.$ = require('./vendor/jquery.js');


jQuery(function ($) {

    $('.docs-index').find('a').each(function () {
        var $this = $(this);
        let status = progress[$this.attr('href').split('/').pop().trim()];

        if (status !== undefined) {
            $this.attr('data-progress', '– ' + status + '%');
        }
    });

    // Smooth scroll to anchor
    // $('body.home a[href*="#"]:not([href="#"])').click(function() {
    //     if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //         if (target.length) {
    //             $('html,body').animate({
    //                 scrollTop: target.offset().top
    //             }, 1000);
    //             return false;
    //         }
    //     }
    // });

    // var scotchPanel = $('#slide-menu').scotchPanel({
    //     containerSelector: 'body',
    //     direction: 'left',
    //     duration: 300,
    //     transition: 'ease',
    //     distanceX: '70%',
    //     forceMinHeight: true,
    //     minHeight: '2500px',
    //     enableEscapeKey: true
    // }).show(); // show to avoid flash of content
    //
    // $('.toggle-slide').click(function() {
    //     scotchPanel.css('overflow', 'scroll');
    //     scotchPanel.toggle();
    //     return false;
    // });

    // $('.overlay').click(function() {
    //     // CLOSE ONLY
    //     scotchPanel.close();
    // });

    // Hide the slide menu when changing the browser width

    // function checkSize() {
    //     if (window.matchMedia("(min-width: 960px)").matches) {
    //         scotchPanel.close();
    //     }
    // }

    // checkSize();
    // window.onresize = checkSize;

    // gheading links
    $('.docs-wrapper').find('a[name]').each(function () {
        var anchor = $('<a href="#' + this.name + '"/>');
        $(this).parent().next('h2').wrapInner(anchor);
    });

    // It's nice to just write in Markdown, so this will adjust
    // our blockquote style to fill in the icon flag and label
    $('.docs blockquote p:first-child').each(function () {
        var str = $(this).html();
        var match = str.match(/\{(.*?)\}/);

        if (match) {
            var icon = match[1] || false;
            var word = match[1] || false;
        }

        if (icon) {
            switch (icon) {
                case "note":
                    icon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" version="1.1" x="0px" y="0px" width="90px" height="90px" viewBox="0 0 90 90" enable-background="new 0 0 90 90" xml:space="preserve"><path fill="#FFFFFF" d="M45 0C20.1 0 0 20.1 0 45s20.1 45 45 45 45-20.1 45-45S69.9 0 45 0zM45 74.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5S48.6 74.5 45 74.5zM52.1 23.9l-2.5 29.6c0 2.5-2.1 4.6-4.6 4.6 -2.5 0-4.6-2.1-4.6-4.6l-2.5-29.6c-0.1-0.4-0.1-0.7-0.1-1.1 0-4 3.2-7.2 7.2-7.2 4 0 7.2 3.2 7.2 7.2C52.2 23.1 52.2 23.5 52.1 23.9z"/></svg>';
                    break;
                case "tip":
                    icon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" version="1.1" x="0px" y="0px" width="56.6px" height="87.5px" viewBox="0 0 56.6 87.5" enable-background="new 0 0 56.6 87.5" xml:space="preserve"><path fill="#FFFFFF" d="M28.7 64.5c-1.4 0-2.5-1.1-2.5-2.5v-5.7 -5V41c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v10.1 5 5.8C31.2 63.4 30.1 64.5 28.7 64.5zM26.4 0.1C11.9 1 0.3 13.1 0 27.7c-0.1 7.9 3 15.2 8.2 20.4 0.5 0.5 0.8 1 1 1.7l3.1 13.1c0.3 1.1 1.3 1.9 2.4 1.9 0.3 0 0.7-0.1 1.1-0.2 1.1-0.5 1.6-1.8 1.4-3l-2-8.4 -0.4-1.8c-0.7-2.9-2-5.7-4-8 -1-1.2-2-2.5-2.7-3.9C5.8 35.3 4.7 30.3 5.4 25 6.7 14.5 15.2 6.3 25.6 5.1c13.9-1.5 25.8 9.4 25.8 23 0 4.1-1.1 7.9-2.9 11.2 -0.8 1.4-1.7 2.7-2.7 3.9 -2 2.3-3.3 5-4 8L41.4 53l-2 8.4c-0.3 1.2 0.3 2.5 1.4 3 0.3 0.2 0.7 0.2 1.1 0.2 1.1 0 2.2-0.8 2.4-1.9l3.1-13.1c0.2-0.6 0.5-1.2 1-1.7 5-5.1 8.2-12.1 8.2-19.8C56.4 12 42.8-1 26.4 0.1zM43.7 69.6c0 0.5-0.1 0.9-0.3 1.3 -0.4 0.8-0.7 1.6-0.9 2.5 -0.7 3-2 8.6-2 8.6 -1.3 3.2-4.4 5.5-7.9 5.5h-4.1H28h-0.5 -3.6c-3.5 0-6.7-2.4-7.9-5.7l-0.1-0.4 -1.8-7.8c-0.4-1.1-0.8-2.1-1.2-3.1 -0.1-0.3-0.2-0.5-0.2-0.9 0.1-1.3 1.3-2.1 2.6-2.1H41C42.4 67.5 43.6 68.2 43.7 69.6zM37.7 72.5H26.9c-4.2 0-7.2 3.9-6.3 7.9 0.6 1.3 1.8 2.1 3.2 2.1h4.1 0.5 0.5 3.6c1.4 0 2.7-0.8 3.2-2.1L37.7 72.5z"/></svg>'
                    break;
                case "laracast":
                case "video":
                    icon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" version="1.1" x="0px" y="0px" width="68.9px" height="59.9px" viewBox="0 0 68.9 59.9" enable-background="new 0 0 68.9 59.9" xml:space="preserve"><path fill="#FFFFFF" d="M63.7 0H5.3C2.4 0 0 2.4 0 5.3v49.3c0 2.9 2.4 5.3 5.3 5.3h58.3c2.9 0 5.3-2.4 5.3-5.3V5.3C69 2.4 66.6 0 63.7 0zM5.3 4h58.3c0.7 0 1.3 0.6 1.3 1.3V48H4V5.3C4 4.6 4.6 4 5.3 4zM13 52v4h-2v-4H13zM17 52h2v4h-2V52zM23 52h2v4h-2V52zM29 52h2v4h-2V52zM35 52h2v4h-2V52zM41 52h2v4h-2V52zM4 54.7V52h3v4H5.3C4.6 56 4 55.4 4 54.7zM63.7 56H47v-4h18v2.7C65 55.4 64.4 56 63.7 56zM26 38.7c0.3 0.2 0.7 0.3 1 0.3 0.4 0 0.7-0.1 1-0.3l17-10c0.6-0.4 1-1 1-1.7s-0.4-1.4-1-1.7l-17-10c-0.6-0.4-1.4-0.4-2 0s-1 1-1 1.7v20C25 37.7 25.4 38.4 26 38.7zM29 20.5L40.1 27 29 33.5V20.5z"/></svg>';
                    break;
            }
            $(this).html(str.replace(/\{(.*?)\}/, '<div class="flag"><span class="svg">' + icon + '</span></div>'));
            $(this).parent().addClass('has-icon ' + word);
        }
    });

    // Mousetrap.bind('/', function(e) {
    //     e.preventDefault();
    //     $('#search-input').focus();
    // });
    //
    // Mousetrap.bind(["ctrl+b", "command+b"], function(e) {
    //     e.preventDefault();
    //     $(".sidebar").find( "h2" ).addClass('is-active');
    // });
    //
    // initAlgoliaSearch();
    //
    // // Fixes FOUC for the search box
    // $('.search.invisible').removeClass('invisible');
    //
    // function initAlgoliaSearch() {
    //     if (window.algolia_app_id === '') {
    //         return;
    //     }
    //
    //     var client = algoliasearch(window.algolia_app_id, window.algolia_search_key);
    //     var index = client.initIndex('docs');
    //
    //     var templates = {
    //         suggestion: Hogan.compile($('#search_suggestion_template').html()),
    //         empty: Hogan.compile($('#search_empty_template').html()),
    //         footer: Hogan.compile($('#search_footer_template').html())
    //     };
    //     var $searchInput = $('#search-input');
    //     var $article = $('article');
    //
    //     // typeahead datasets
    //     // https://github.com/twitter/typeahead.js/blob/master/doc/jquery_typeahead.md#datasets
    //     var datasets = [];
    //
    //     datasets.push({
    //         source: function searchAlgolia(query, cb) {
    //             index.search(query, {
    //                 hitsPerPage: 5, tagFilters: [window.version]
    //             }, function searchCallback(err, content) {
    //                 if (err) {
    //                     throw err;
    //                 }
    //                 cb(content.hits)
    //             });
    //         },
    //         templates: {
    //             suggestion: templates.suggestion.render.bind(templates.suggestion),
    //             empty: templates.empty.render.bind(templates.empty),
    //             footer: templates.footer.render.bind(templates.footer)
    //         }
    //     });
    //
    //     var typeahead = $searchInput.typeahead({hint: false}, datasets);
    //     var old_input = '';
    //
    //     typeahead.on('typeahead:selected', function changePage(e, item) {
    //         window.location.href = '/docs/' + item._tags[0] + '/' + item.link;
    //     });
    //
    //     typeahead.on('keyup', function(e) {
    //         old_input = $(this).typeahead('val');
    //
    //         if ($(this).val() === '' && old_input.length == $(this).typeahead('val')) {
    //             $article.css('opacity', '1');
    //             $searchInput.closest('#search-wrapper').removeClass('not-empty');
    //         } else {
    //             $article.css('opacity', '0.1');
    //             $searchInput.closest('#search-wrapper').addClass('not-empty');
    //         }
    //         if (e.keyCode === 27) {
    //             $article.css('opacity', '1');
    //         }
    //     });
    //
    //     typeahead.on('typeahead:closed', function () {
    //         $article.css('opacity', '1');
    //     });
    //
    //     typeahead.on('typeahead:closed',
    //         function (e) {
    //             // keep menu open if input element is still focused
    //             if ($(e.target).is(':focus')) {
    //                 return false;
    //             }
    //         }
    //     );
    //
    //     $('#cross').click(function() {
    //         typeahead.typeahead('val', '').keyup();
    //         $article.css('opacity', '1');
    //     });
    // }
    //
    // // collapse and expand for the sidebar
    // var toggles = document.querySelectorAll('.sidebar h2'),
    //     togglesList = document.querySelectorAll('.sidebar h2 + ul');
    //
    // for (var i = 0; i < toggles.length; i++) {
    //     toggles[i].addEventListener('click', expandItem);
    //     toggles[i].addEventListener('keydown', expandItemKeyboard);
    //     toggles[i].setAttribute('tabindex', '0');
    // }
    //
    // // Via https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability
    // function storageAvailable(type) {
    //     try {
    //         var storage = window[type],
    //             x = '__storage_test__';
    //         storage.setItem(x, x);
    //         storage.removeItem(x);
    //         return true;
    //     } catch(e) {
    //         return e instanceof DOMException && (
    //                 // everything except Firefox
    //             e.code === 22 ||
    //             // Firefox
    //             e.code === 1014 ||
    //             // test name field too, because code might not be present
    //             // everything except Firefox
    //             e.name === 'QuotaExceededError' ||
    //             // Firefox
    //             e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
    //             // acknowledge QuotaExceededError only if there's something already stored
    //             storage.length !== 0;
    //     }
    // }
    //
    // // Track the state of the doc collapse
    // var docCollapsed = true;
    // function expandDocs(e) {
    //     for (var i = 0; i < toggles.length; i++) {
    //         if(docCollapsed) {
    //             toggles[i].classList.add('is-active')
    //         } else {
    //             toggles[i].classList.remove('is-active')
    //         }
    //     }
    //
    //     // Modify states
    //     docCollapsed = !docCollapsed;
    //     document.getElementById('doc-expand').text = (docCollapsed ? '▶' : '▼');
    //
    //     // Modify LS if we can
    //     if (storageAvailable('localStorage')) {
    //         localStorage.setItem('laravel_docCollapsed', docCollapsed);
    //     }
    //     // Cancel event
    //     if(e) {
    //         e.preventDefault();
    //     }
    // }
    //
    // if (document.getElementById('doc-expand')) {
    //     // Load the users previous preference if available
    //     if(storageAvailable('localStorage')) {
    //         // Can't use if(var) since this is a boolean, LS returns null for unset keys
    //         if(localStorage.getItem('laravel_docCollapsed') === null) {
    //             localStorage.setItem('laravel_docCollapsed', true)
    //         } else {
    //             // Load previous state, and if it was false, then expand the doc
    //             // LS will store booleans as strings, we will "cast" them back here
    //             localStorage.getItem('laravel_docCollapsed') == 'false' ? expandDocs() : null
    //         }
    //     }
    //
    //     // Register event listener
    //     document.getElementById('doc-expand').addEventListener('click', expandDocs);
    // }
    //
    // if ($('.sidebar ul').length) {
    //     var current = $('.sidebar ul').find('li a[href="' + window.location.pathname + '"]');
    //
    //     if (current.length) {
    //         current.parent().css('font-weight', 'bold');
    //
    //         // Only toggle the state if the user has collapsed the documentation
    //         if(docCollapsed) {
    //             current.closest('ul').prev().toggleClass('is-active');
    //         }
    //     }
    // }
    //
    // function expandItem(e) {
    //     var elem = e.target;
    //
    //     if(elem.classList.contains('is-active')) {
    //         elem.classList.remove('is-active');
    //     } else {
    //         clearItems();
    //         elem.classList.add('is-active');
    //     }
    // }
    //
    // function expandItemKeyboard(e) {
    //     var elem = e.target;
    //
    //     if ([13, 37, 39].includes(e.keyCode)) {
    //         clearItems();
    //     }
    //
    //     if (e.keyCode === 13) {
    //         elem.classList.toggle('is-active');
    //     }
    //
    //     if (e.keyCode === 39) {
    //         elem.classList.add('is-active');
    //     }
    //
    //     if (e.keyCode === 37) {
    //         elem.classList.remove('is-active');
    //     }
    // }
    //
    // function clearItems() {
    //     for (var i = 0; i < toggles.length; i++) {
    //         toggles[i].classList.remove('is-active');
    //     }
    // }
});