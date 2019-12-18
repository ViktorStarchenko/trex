/*
 * jQuery Dropdown: A simple dropdown plugin
 *
 * Contribute: https://github.com/claviska/jquery-dropdown
 *
 * @license: MIT license: http://opensource.org/licenses/MIT
 *
 */
jQuery&&function($){function t(t,e){var d=t?$(this):e,n=$(d.attr("data-jq-dropdown")),a=d.hasClass("jq-dropdown-open");if(t){if($(t.target).hasClass("jq-dropdown-ignore"))return;t.preventDefault(),t.stopPropagation()}else if(d!==e.target&&$(e.target).hasClass("jq-dropdown-ignore"))return;o(),a||d.hasClass("jq-dropdown-disabled")||(d.addClass("jq-dropdown-open"),n.data("jq-dropdown-trigger",d).show(),r(),n.trigger("show",{jqDropdown:n,trigger:d}))}function o(t){var o=t?$(t.target).parents().addBack():null;if(o&&o.is(".jq-dropdown")){if(!o.is(".jq-dropdown-menu"))return;if(!o.is("A"))return}var r=jQuery.Event("hide");$(document).find(".jq-dropdown:visible").each(function(){var t=$(this);t.hide().removeData("jq-dropdown-trigger").trigger("hide",{jqDropdown:t})}),r.isDefaultPrevented()||($(document).find(".jq-dropdown:visible").each(function(){var t=$(this);t.hide().removeData("jq-dropdown-trigger").trigger("hide",{jqDropdown:t})}),$(document).find(".jq-dropdown-open").removeClass("jq-dropdown-open"))}function r(){var t=$(".jq-dropdown:visible").eq(0),o=t.data("jq-dropdown-trigger"),r=o?parseInt(o.attr("data-horizontal-offset")||0,10):null,e=o?parseInt(o.attr("data-vertical-offset")||0,10):null;0!==t.length&&o&&(t.hasClass("jq-dropdown-relative")?t.css({left:t.hasClass("jq-dropdown-anchor-right")?o.position().left-(t.outerWidth(!0)-o.outerWidth(!0))-parseInt(o.css("margin-right"),10)+r:o.position().left+parseInt(o.css("margin-left"),10)+r,top:o.position().top+o.outerHeight(!0)-parseInt(o.css("margin-top"),10)+e}):t.css({left:t.hasClass("jq-dropdown-anchor-right")?o.offset().left-(t.outerWidth()-o.outerWidth())+r:o.offset().left+r,top:o.offset().top+o.outerHeight()+e}))}$.extend($.fn,{jqDropdown:function(r,e){switch(r){case"show":return t(null,$(this)),$(this);case"hide":return o(),$(this);case"attach":return $(this).attr("data-jq-dropdown",e);case"detach":return o(),$(this).removeAttr("data-jq-dropdown");case"disable":return $(this).addClass("jq-dropdown-disabled");case"enable":return o(),$(this).removeClass("jq-dropdown-disabled")}}}),$(document).on("click.jq-dropdown","[data-jq-dropdown]",t),$(document).on("click.jq-dropdown",o),$(window).on("resize",r)}(jQuery);
/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 1.2.1
 *
 * http://wenzhixin.net.cn/p/multiple-select/
 */

(function ($) {

    'use strict';

    // it only does '%s', and return '' when arguments are undefined
    var sprintf = function (str) {
        var args = arguments,
            flag = true,
            i = 1;

        str = str.replace(/%s/g, function () {
            var arg = args[i++];

            if (typeof arg === 'undefined') {
                flag = false;
                return '';
            }
            return arg;
        });
        return flag ? str : '';
    };

    var removeDiacritics = function (str) {
        var defaultDiacriticsRemovalMap = [
            {'base':'A', 'letters':/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},
            {'base':'AA','letters':/[\uA732]/g},
            {'base':'AE','letters':/[\u00C6\u01FC\u01E2]/g},
            {'base':'AO','letters':/[\uA734]/g},
            {'base':'AU','letters':/[\uA736]/g},
            {'base':'AV','letters':/[\uA738\uA73A]/g},
            {'base':'AY','letters':/[\uA73C]/g},
            {'base':'B', 'letters':/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},
            {'base':'C', 'letters':/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},
            {'base':'D', 'letters':/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},
            {'base':'DZ','letters':/[\u01F1\u01C4]/g},
            {'base':'Dz','letters':/[\u01F2\u01C5]/g},
            {'base':'E', 'letters':/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},
            {'base':'F', 'letters':/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},
            {'base':'G', 'letters':/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},
            {'base':'H', 'letters':/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},
            {'base':'I', 'letters':/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},
            {'base':'J', 'letters':/[\u004A\u24BF\uFF2A\u0134\u0248]/g},
            {'base':'K', 'letters':/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},
            {'base':'L', 'letters':/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},
            {'base':'LJ','letters':/[\u01C7]/g},
            {'base':'Lj','letters':/[\u01C8]/g},
            {'base':'M', 'letters':/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},
            {'base':'N', 'letters':/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},
            {'base':'NJ','letters':/[\u01CA]/g},
            {'base':'Nj','letters':/[\u01CB]/g},
            {'base':'O', 'letters':/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},
            {'base':'OI','letters':/[\u01A2]/g},
            {'base':'OO','letters':/[\uA74E]/g},
            {'base':'OU','letters':/[\u0222]/g},
            {'base':'P', 'letters':/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},
            {'base':'Q', 'letters':/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},
            {'base':'R', 'letters':/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},
            {'base':'S', 'letters':/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},
            {'base':'T', 'letters':/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},
            {'base':'TZ','letters':/[\uA728]/g},
            {'base':'U', 'letters':/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},
            {'base':'V', 'letters':/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},
            {'base':'VY','letters':/[\uA760]/g},
            {'base':'W', 'letters':/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},
            {'base':'X', 'letters':/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},
            {'base':'Y', 'letters':/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},
            {'base':'Z', 'letters':/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},
            {'base':'a', 'letters':/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},
            {'base':'aa','letters':/[\uA733]/g},
            {'base':'ae','letters':/[\u00E6\u01FD\u01E3]/g},
            {'base':'ao','letters':/[\uA735]/g},
            {'base':'au','letters':/[\uA737]/g},
            {'base':'av','letters':/[\uA739\uA73B]/g},
            {'base':'ay','letters':/[\uA73D]/g},
            {'base':'b', 'letters':/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},
            {'base':'c', 'letters':/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},
            {'base':'d', 'letters':/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},
            {'base':'dz','letters':/[\u01F3\u01C6]/g},
            {'base':'e', 'letters':/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},
            {'base':'f', 'letters':/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},
            {'base':'g', 'letters':/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},
            {'base':'h', 'letters':/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},
            {'base':'hv','letters':/[\u0195]/g},
            {'base':'i', 'letters':/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},
            {'base':'j', 'letters':/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},
            {'base':'k', 'letters':/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},
            {'base':'l', 'letters':/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},
            {'base':'lj','letters':/[\u01C9]/g},
            {'base':'m', 'letters':/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},
            {'base':'n', 'letters':/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},
            {'base':'nj','letters':/[\u01CC]/g},
            {'base':'o', 'letters':/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},
            {'base':'oi','letters':/[\u01A3]/g},
            {'base':'ou','letters':/[\u0223]/g},
            {'base':'oo','letters':/[\uA74F]/g},
            {'base':'p','letters':/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},
            {'base':'q','letters':/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},
            {'base':'r','letters':/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},
            {'base':'s','letters':/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},
            {'base':'t','letters':/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},
            {'base':'tz','letters':/[\uA729]/g},
            {'base':'u','letters':/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},
            {'base':'v','letters':/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},
            {'base':'vy','letters':/[\uA761]/g},
            {'base':'w','letters':/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},
            {'base':'x','letters':/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},
            {'base':'y','letters':/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},
            {'base':'z','letters':/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}
        ];

        for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
            str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
        }

        return str;

   };

    function MultipleSelect($el, options) {
        var that = this,
            name = $el.attr('name') || options.name || '';

        this.options = options;

        // hide select element
        this.$el = $el.hide();

        // label element
        this.$label = this.$el.closest('label');
        if (this.$label.length === 0 && this.$el.attr('id')) {
            this.$label = $(sprintf('label[for="%s"]', this.$el.attr('id').replace(/:/g, '\\:')));
        }

        // restore class and title from select element
        this.$parent = $(sprintf(
            '<div class="ms-parent %s" %s/>',
            $el.attr('class') || '',
            sprintf('title="%s"', $el.attr('title'))));

        // add placeholder to choice button
        this.$choice = $(sprintf([
                '<button type="button" class="ms-choice">',
                '<span class="placeholder">%s</span>',
                '<div></div>',
                '</button>'
            ].join(''),
            this.options.placeholder));

        // default position is bottom
        this.$drop = $(sprintf('<div class="ms-drop %s"%s></div>',
            this.options.position,
            sprintf(' style="width: %s"', this.options.dropWidth)));

        this.$el.after(this.$parent);
        this.$parent.append(this.$choice);
        this.$parent.append(this.$drop);

        if (this.$el.prop('disabled')) {
            this.$choice.addClass('disabled');
        }
        this.$parent.css('width',
            this.options.width ||
            this.$el.css('width') ||
            this.$el.outerWidth() + 20);

        this.selectAllName = 'data-name="selectAll' + name + '"';
        this.selectGroupName = 'data-name="selectGroup' + name + '"';
        this.selectItemName = 'data-name="selectItem' + name + '"';

        if (!this.options.keepOpen) {
            $(document).click(function (e) {
                if ($(e.target)[0] === that.$choice[0] ||
                    $(e.target).parents('.ms-choice')[0] === that.$choice[0]) {
                    return;
                }
                if (($(e.target)[0] === that.$drop[0] ||
                    $(e.target).parents('.ms-drop')[0] !== that.$drop[0] && e.target !== $el[0]) &&
                    that.options.isOpen) {
                    that.close();
                }
            });
        }
    }

    MultipleSelect.prototype = {
        constructor: MultipleSelect,

        init: function () {
            var that = this,
                $ul = $('<ul></ul>');

            this.$drop.html('');

            if (this.options.filter) {
                this.$drop.append([
                    '<div class="ms-search">',
                    '<input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false">',
                    '</div>'].join('')
                );
            }

            if (this.options.selectAll && !this.options.single) {
                $ul.append([
                    '<li class="ms-select-all">',
                    '<label>',
                    sprintf('<input type="checkbox" %s /> ', this.selectAllName),
                    this.options.selectAllDelimiter[0],
                    this.options.selectAllText,
                    this.options.selectAllDelimiter[1],
                    '</label>',
                    '</li>'
                ].join(''));
            }

            $.each(this.$el.children(), function (i, elm) {
                $ul.append(that.optionToHtml(i, elm));
            });
            $ul.append(sprintf('<li class="ms-no-results">%s</li>', this.options.noMatchesFound));
            this.$drop.append($ul);

            this.$drop.find('ul').css('max-height', this.options.maxHeight + 'px');
            this.$drop.find('.multiple').css('width', this.options.multipleWidth + 'px');

            this.$searchInput = this.$drop.find('.ms-search input');
            this.$selectAll = this.$drop.find('input[' + this.selectAllName + ']');
            this.$selectGroups = this.$drop.find('input[' + this.selectGroupName + ']');
            this.$selectItems = this.$drop.find('input[' + this.selectItemName + ']:enabled');
            this.$disableItems = this.$drop.find('input[' + this.selectItemName + ']:disabled');
            this.$noResults = this.$drop.find('.ms-no-results');

            this.events();
            this.updateSelectAll(true);
            this.update(true);

            if (this.options.isOpen) {
                this.open();
            }
        },

        optionToHtml: function (i, elm, group, groupDisabled) {
            var that = this,
                $elm = $(elm),
                classes = $elm.attr('class') || '',
                title = sprintf('title="%s"', $elm.attr('title')),
                multiple = this.options.multiple ? 'multiple' : '',
                disabled,
                type = this.options.single ? 'radio' : 'checkbox';

            if ($elm.is('option')) {
                var value = $elm.val(),
                    text = that.options.textTemplate($elm),
                    selected = $elm.prop('selected'),
                    style = sprintf('style="%s"', this.options.styler(value)),
                    $el;

                disabled = groupDisabled || $elm.prop('disabled');

                $el = $([
                    sprintf('<li class="%s %s" %s %s>', multiple, classes, title, style),
                    sprintf('<label class="%s">', disabled ? 'disabled' : ''),
                    sprintf('<input type="%s" %s%s%s%s>',
                        type, this.selectItemName,
                        selected ? ' checked="checked"' : '',
                        disabled ? ' disabled="disabled"' : '',
                        sprintf(' data-group="%s"', group)),
                    sprintf('<span>%s</span>', text),
                    '</label>',
                    '</li>'
                ].join(''));
                $el.find('input').val(value);
                return $el;
            }
            if ($elm.is('optgroup')) {
                var label = that.options.labelTemplate($elm),
                    $group = $('<div/>');

                group = 'group_' + i;
                disabled = $elm.prop('disabled');

                $group.append([
                    '<li class="group">',
                    sprintf('<label class="optgroup %s" data-group="%s">', disabled ? 'disabled' : '', group),
                    this.options.hideOptgroupCheckboxes || this.options.single ? '' :
                        sprintf('<input type="checkbox" %s %s>',
                        this.selectGroupName, disabled ? 'disabled="disabled"' : ''),
                    label,
                    '</label>',
                    '</li>'
                ].join(''));

                $.each($elm.children(), function (i, elm) {
                    $group.append(that.optionToHtml(i, elm, group, disabled));
                });
                return $group.html();
            }
        },

        events: function () {
            var that = this,
                toggleOpen = function (e) {
                    e.preventDefault();
                    that[that.options.isOpen ? 'close' : 'open']();
                };

            if (this.$label) {
                this.$label.off('click').on('click', function (e) {
                    if (e.target.nodeName.toLowerCase() !== 'label' || e.target !== this) {
                        return;
                    }
                    toggleOpen(e);
                    if (!that.options.filter || !that.options.isOpen) {
                        that.focus();
                    }
                    e.stopPropagation(); // Causes lost focus otherwise
                });
            }

            this.$choice.off('click').on('click', toggleOpen)
                .off('focus').on('focus', this.options.onFocus)
                .off('blur').on('blur', this.options.onBlur);

            this.$parent.off('keydown').on('keydown', function (e) {
                switch (e.which) {
                    case 27: // esc key
                        that.close();
                        that.$choice.focus();
                        break;
                }
            });

            this.$searchInput.off('keydown').on('keydown',function (e) {
                // Ensure shift-tab causes lost focus from filter as with clicking away
                if (e.keyCode === 9 && e.shiftKey) {
                    that.close();
                }
            }).off('keyup').on('keyup', function (e) {
                // enter or space
                // Avoid selecting/deselecting if no choices made
                if (that.options.filterAcceptOnEnter && (e.which === 13 || e.which == 32) && that.$searchInput.val()) {
                    that.$selectAll.click();
                    that.close();
                    that.focus();
                    return;
                }
                that.filter();
            });

            this.$selectAll.off('click').on('click', function () {
                var checked = $(this).prop('checked'),
                    $items = that.$selectItems.filter(':visible');

                if ($items.length === that.$selectItems.length) {
                    that[checked ? 'checkAll' : 'uncheckAll']();
                } else { // when the filter option is true
                    that.$selectGroups.prop('checked', checked);
                    $items.prop('checked', checked);
                    that.options[checked ? 'onCheckAll' : 'onUncheckAll']();
                    that.update();
                }
            });
            this.$selectGroups.off('click').on('click', function () {
                var group = $(this).parent().attr('data-group'),
                    $items = that.$selectItems.filter(':visible'),
                    $children = $items.filter(sprintf('[data-group="%s"]', group)),
                    checked = $children.length !== $children.filter(':checked').length;

                $children.prop('checked', checked);
                that.updateSelectAll();
                that.update();
                that.options.onOptgroupClick({
                    label: $(this).parent().text(),
                    checked: checked,
                    children: $children.get(),
                    instance: that
                });
            });
            this.$selectItems.off('click').on('click', function () {
                that.updateSelectAll();
                that.update();
                that.updateOptGroupSelect();
                that.options.onClick({
                    label: $(this).parent().text(),
                    value: $(this).val(),
                    checked: $(this).prop('checked'),
                    instance: that
                });

                if (that.options.single && that.options.isOpen && !that.options.keepOpen) {
                    that.close();
                }

                if (that.options.single) {
                    var clickedVal = $(this).val();
                    that.$selectItems.filter(function() {
                        return $(this).val() !== clickedVal;
                    }).each(function() {
                        $(this).prop('checked', false);
                    });
                    that.update();
                }
            });
        },

        open: function () {
            if (this.$choice.hasClass('disabled')) {
                return;
            }
            this.options.isOpen = true;
            this.$choice.find('>div').addClass('open');
            this.$drop[this.animateMethod('show')]();

            // fix filter bug: no results show
            this.$selectAll.parent().show();
            this.$noResults.hide();

            // Fix #77: 'All selected' when no options
            if (!this.$el.children().length) {
                this.$selectAll.parent().hide();
                this.$noResults.show();
            }

            if (this.options.container) {
                var offset = this.$drop.offset();
                this.$drop.appendTo($(this.options.container));
                this.$drop.offset({
                    top: offset.top,
                    left: offset.left
                });
            }

            if (this.options.filter) {
                this.$searchInput.val('');
                this.$searchInput.focus();
                this.filter();
            }
            this.options.onOpen();
        },

        close: function () {
            this.options.isOpen = false;
            this.$choice.find('>div').removeClass('open');
            this.$drop[this.animateMethod('hide')]();
            if (this.options.container) {
                this.$parent.append(this.$drop);
                this.$drop.css({
                    'top': 'auto',
                    'left': 'auto'
                });
            }
            this.options.onClose();
        },

        animateMethod: function (method) {
            var methods = {
                show: {
                    fade: 'fadeIn',
                    slide: 'slideDown'
                },
                hide: {
                    fade: 'fadeOut',
                    slide: 'slideUp'
                }
            };

            return methods[method][this.options.animate] || method;
        },

        update: function (isInit) {
            var selects = this.options.displayValues ? this.getSelects() : this.getSelects('text'),
                $span = this.$choice.find('>span'),
                sl = selects.length;

            if (sl === 0) {
                $span.addClass('placeholder').html(this.options.placeholder);
            } else if (this.options.allSelected && sl === this.$selectItems.length + this.$disableItems.length) {
                $span.removeClass('placeholder').html(this.options.allSelected);
            } else if (this.options.ellipsis && sl > this.options.minimumCountSelected) {
                $span.removeClass('placeholder').text(selects.slice(0, this.options.minimumCountSelected)
                    .join(this.options.delimiter) + '...');
            } else if (this.options.countSelected && sl > this.options.minimumCountSelected) {
                $span.removeClass('placeholder').html(this.options.countSelected
                    .replace('#', selects.length)
                    .replace('%', this.$selectItems.length + this.$disableItems.length));
            } else {
                $span.removeClass('placeholder').text(selects.join(this.options.delimiter));
            }

            if (this.options.addTitle) {
                $span.prop('title', this.getSelects('text'));
            }

            // set selects to select
            this.$el.val(this.getSelects()).trigger('change');

            // add selected class to selected li
            this.$drop.find('li').removeClass('selected');
            this.$drop.find('input:checked').each(function () {
                $(this).parents('li').first().addClass('selected');
            });

            // trigger <select> change event
            if (!isInit) {
                this.$el.trigger('change');
            }
        },

        updateSelectAll: function (isInit) {
            var $items = this.$selectItems;

            if (!isInit) {
                $items = $items.filter(':visible');
            }
            this.$selectAll.prop('checked', $items.length &&
                $items.length === $items.filter(':checked').length);
            if (!isInit && this.$selectAll.prop('checked')) {
                this.options.onCheckAll();
            }
        },

        updateOptGroupSelect: function () {
            var $items = this.$selectItems.filter(':visible');
            $.each(this.$selectGroups, function (i, val) {
                var group = $(val).parent().attr('data-group'),
                    $children = $items.filter(sprintf('[data-group="%s"]', group));
                $(val).prop('checked', $children.length &&
                    $children.length === $children.filter(':checked').length);
            });
        },

        //value or text, default: 'value'
        getSelects: function (type) {
            var that = this,
                texts = [],
                values = [];
            this.$drop.find(sprintf('input[%s]:checked', this.selectItemName)).each(function () {
                texts.push($(this).parents('li').first().text());
                values.push($(this).val());
            });

            if (type === 'text' && this.$selectGroups.length) {
                texts = [];
                this.$selectGroups.each(function () {
                    var html = [],
                        text = $.trim($(this).parent().text()),
                        group = $(this).parent().data('group'),
                        $children = that.$drop.find(sprintf('[%s][data-group="%s"]', that.selectItemName, group)),
                        $selected = $children.filter(':checked');

                    if (!$selected.length) {
                        return;
                    }

                    html.push('[');
                    html.push(text);
                    if ($children.length > $selected.length) {
                        var list = [];
                        $selected.each(function () {
                            list.push($(this).parent().text());
                        });
                        html.push(': ' + list.join(', '));
                    }
                    html.push(']');
                    texts.push(html.join(''));
                });
            }
            return type === 'text' ? texts : values;
        },

        setSelects: function (values) {
            var that = this;
            this.$selectItems.prop('checked', false);
            this.$disableItems.prop('checked', false);
            $.each(values, function (i, value) {
                that.$selectItems.filter(sprintf('[value="%s"]', value)).prop('checked', true);
                that.$disableItems.filter(sprintf('[value="%s"]', value)).prop('checked', true);
            });
            this.$selectAll.prop('checked', this.$selectItems.length ===
                this.$selectItems.filter(':checked').length + this.$disableItems.filter(':checked').length);

            $.each(that.$selectGroups, function (i, val) {
                var group = $(val).parent().attr('data-group'),
                    $children = that.$selectItems.filter('[data-group="' + group + '"]');
                $(val).prop('checked', $children.length &&
                    $children.length === $children.filter(':checked').length);
            });

            this.update();
        },

        enable: function () {
            this.$choice.removeClass('disabled');
        },

        disable: function () {
            this.$choice.addClass('disabled');
        },

        checkAll: function () {
            this.$selectItems.prop('checked', true);
            this.$selectGroups.prop('checked', true);
            this.$selectAll.prop('checked', true);
            this.update();
            this.options.onCheckAll();
        },

        uncheckAll: function () {
            this.$selectItems.prop('checked', false);
            this.$selectGroups.prop('checked', false);
            this.$selectAll.prop('checked', false);
            this.update();
            this.options.onUncheckAll();
        },

        focus: function () {
            this.$choice.focus();
            this.options.onFocus();
        },

        blur: function () {
            this.$choice.blur();
            this.options.onBlur();
        },

        refresh: function () {
            this.init();
        },
		
        destroy: function () {
            this.$el.show();
            this.$parent.remove();
            this.$el.data('multipleSelect', null);
        },

        filter: function () {
            var that = this,
                text = $.trim(this.$searchInput.val()).toLowerCase();

            if (text.length === 0) {
                this.$selectAll.parent().show();
                this.$selectItems.parent().show();
                this.$disableItems.parent().show();
                this.$selectGroups.parent().show();
                this.$noResults.hide();
            } else {
                this.$selectItems.each(function () {
                    var $parent = $(this).parent();
                    $parent[removeDiacritics($parent.text().toLowerCase()).indexOf(removeDiacritics(text)) < 0 ? 'hide' : 'show']();
                });
                this.$disableItems.parent().hide();
                this.$selectGroups.each(function () {
                    var $parent = $(this).parent();
                    var group = $parent.attr('data-group'),
                        $items = that.$selectItems.filter(':visible');
                    $parent[$items.filter(sprintf('[data-group="%s"]', group)).length ? 'show' : 'hide']();
                });

                //Check if no matches found
                if (this.$selectItems.parent().filter(':visible').length) {
                    this.$selectAll.parent().show();
                    this.$noResults.hide();
                } else {
                    this.$selectAll.parent().hide();
                    this.$noResults.show();
                }
            }
            this.updateOptGroupSelect();
            this.updateSelectAll();
            this.options.onFilter(text);
        }
    };

    $.fn.multipleSelect = function () {
        var option = arguments[0],
            args = arguments,

            value,
            allowedMethods = [
                'getSelects', 'setSelects',
                'enable', 'disable',
                'open', 'close',
                'checkAll', 'uncheckAll',
                'focus', 'blur',
                'refresh', 'destroy'
            ];

        this.each(function () {
            var $this = $(this),
                data = $this.data('multipleSelect'),
                options = $.extend({}, $.fn.multipleSelect.defaults,
                    $this.data(), typeof option === 'object' && option);

            if (!data) {
                data = new MultipleSelect($this, options);
                $this.data('multipleSelect', data);
            }

            if (typeof option === 'string') {
                if ($.inArray(option, allowedMethods) < 0) {
                    throw 'Unknown method: ' + option;
                }
                value = data[option](args[1]);
            } else {
                data.init();
                if (args[1]) {
                    value = data[args[1]].apply(data, [].slice.call(args, 2));
                }
            }
        });

        return typeof value !== 'undefined' ? value : this;
    };

    $.fn.multipleSelect.defaults = {
        name: '',
        isOpen: false,
        placeholder: '',
        selectAll: true,
        selectAllDelimiter: ['[', ']'],
        minimumCountSelected: 3,
        ellipsis: false,
        multiple: false,
        multipleWidth: 80,
        single: false,
        filter: false,
        width: undefined,
        dropWidth: undefined,
        maxHeight: 250,
        container: null,
        position: 'bottom',
        keepOpen: false,
        animate: 'none', // 'none', 'fade', 'slide'
        displayValues: false,
        delimiter: ', ',
        addTitle: false,
        filterAcceptOnEnter: false,
        hideOptgroupCheckboxes: false,

        selectAllText: 'Select all',
        allSelected: 'All selected',
        countSelected: '# of % selected',
        noMatchesFound: 'No matches found',

        styler: function () {
            return false;
        },
        textTemplate: function ($elm) {
            return $elm.html();
        },
        labelTemplate: function ($elm) {
            return $elm.attr('label');
        },

        onOpen: function () {
            return false;
        },
        onClose: function () {
            return false;
        },
        onCheckAll: function () {
            return false;
        },
        onUncheckAll: function () {
            return false;
        },
        onFocus: function () {
            return false;
        },
        onBlur: function () {
            return false;
        },
        onOptgroupClick: function () {
            return false;
        },
        onClick: function () {
            return false;
        },
        onFilter: function () {
            return false;
        }
    };
})(jQuery);

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-forcetouch-touchevents-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var u in g)if(g.hasOwnProperty(u)){if(e=[],n=g[u],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),y.push((o?"":"no-")+a.join("-"))}}function i(e){var n=C.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?C.className.baseVal=n:C.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(){var e=n.body;return e||(e=s(w?"svg":"body"),e.fake=!0),e}function f(e,t,r,o){var i,a,f,l,c="modernizr",p=s("div"),d=u();if(parseInt(r,10))for(;r--;)f=s("div"),f.id=o?o[r]:c+(r+1),p.appendChild(f);return i=s("style"),i.type="text/css",i.id="s"+c,(d.fake?d:p).appendChild(i),d.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",l=C.style.overflow,C.style.overflow="hidden",C.appendChild(d)),a=t(p,e),d.fake?(d.parentNode.removeChild(d),C.style.overflow=l,C.offsetHeight):p.parentNode.removeChild(p),!!a}function l(e,n){return!!~(""+e).indexOf(n)}function c(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?c(o,t||n):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+d(n[o])+":"+r+")");return i=i.join(" or "),f("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,i){function u(){c&&(delete A.style,delete A.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var f=m(e,o);if(!r(f,"undefined"))return f}for(var c,p,d,v,h,y=["modernizr","tspan","samp"];!A.style&&y.length;)c=!0,A.modElem=s(y.shift()),A.style=A.modElem.style;for(d=e.length,p=0;d>p;p++)if(v=e[p],h=A.style[v],l(v,"-")&&(v=a(v)),A.style[v]!==t){if(i||r(o,"undefined"))return u(),"pfx"==n?v:!0;try{A.style[v]=o}catch(g){}if(A.style[v]!=h)return u(),"pfx"==n?v:!0}return u(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,i):(a=(e+" "+z.join(s+" ")+s).split(" "),p(a,n,t))}var y=[],g=[],_={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=_,Modernizr=new Modernizr;var C=n.documentElement,w="svg"===C.nodeName.toLowerCase(),E=_._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];_._prefixes=E;var x=function(){function e(e,n){var o;return e?(n&&"string"!=typeof n||(n=s(n||"div")),e="on"+e,o=e in n,!o&&r&&(n.setAttribute||(n=s("div")),n.setAttribute(e,""),o="function"==typeof n[e],n[e]!==t&&(n[e]=t),n.removeAttribute(e)),o):!1}var r=!("onblur"in n.documentElement);return e}();_.hasEvent=x;var S=_.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var r=["@media (",E.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");S(r,function(e){t=9===e.offsetTop})}return t});var b="Moz O ms Webkit",T=_._config.usePrefixes?b.split(" "):[];_._cssomPrefixes=T;var O=function(n){var r,o=E.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=E[s],u=a.toUpperCase()+"_"+r;if(u in i)return"@-"+a.toLowerCase()+"-"+n}return!1};_.atRule=O;var z=_._config.usePrefixes?b.toLowerCase().split(" "):[];_._domPrefixes=z;var N={elem:s("modernizr")};Modernizr._q.push(function(){delete N.elem});var A={style:N.elem.style};Modernizr._q.unshift(function(){delete A.style}),_.testAllProps=h;var P=_.prefixed=function(e,n,t){return 0===e.indexOf("@")?O(e):(-1!=e.indexOf("-")&&(e=a(e)),n?h(e,n,t):h(e,"pfx"))};Modernizr.addTest("forcetouch",function(){return x(P("mouseforcewillbegin",e,!1),e)?MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN:!1}),o(),i(y),delete _.addTest,delete _.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);
/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){"use strict";function b(a){var b=a.length,d=c.type(a);return"function"!==d&&!c.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a))}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return a&&a===a.window},c.type=function(a){return a?"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a:a+""},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return b===undefined||f.call(a,b)},c.each=function(a,c,d){var e=0,f=a.length,g=b(a);if(d){if(g)for(;e<f&&c.apply(a[e],d)!==!1;e++);else for(e in a)if(a.hasOwnProperty(e)&&c.apply(a[e],d)===!1)break}else if(g)for(;e<f&&c.call(a[e],e,a[e])!==!1;e++);else for(e in a)if(a.hasOwnProperty(e)&&c.call(a[e],e,a[e])===!1)break;return a},c.data=function(a,b,e){if(e===undefined){var f=a[c.expando],g=f&&d[f];if(b===undefined)return g;if(g&&b in g)return g[b]}else if(b!==undefined){var h=a[c.expando]||(a[c.expando]=++c.uuid);return d[h]=d[h]||{},d[h][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&(b?c.each(b,function(a,b){delete f[b]}):delete d[e])},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);i<j;i++)if(f=arguments[i])for(e in f)f.hasOwnProperty(e)&&(a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):d!==undefined&&(h[e]=d)));return h},c.queue=function(a,d,e){if(a){d=(d||"fx")+"queue";var f=c.data(a,d);return e?(!f||c.isArray(e)?f=c.data(a,d,function(a,c){var d=c||[];return a&&(b(Object(a))?function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;)a[e++]=b[d++];if(c!==c)for(;b[d]!==undefined;)a[e++]=b[d++];a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}(e)):f.push(e),f):f||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){var a=this[0],b=function(a){for(var b=a.offsetParent;b&&"html"!==b.nodeName.toLowerCase()&&b.style&&"static"===b.style.position;)b=b.offsetParent;return b||document}(a),d=this.offset(),e=/^(?:body|html)$/i.test(b.nodeName)?{top:0,left:0}:c(b).offset();return d.top-=parseFloat(a.style.marginTop)||0,d.left-=parseFloat(a.style.marginLeft)||0,b.style&&(e.top+=parseFloat(b.style.borderTopWidth)||0,e.left+=parseFloat(b.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){"use strict";return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return u.isWrapped(a)?a=s.call(a):u.isNode(a)&&(a=[a]),a}function g(a){var b=o.data(a,"velocity");return null===b?d:b}function h(a,b){var c=g(a);c&&c.delayTimer&&!c.delayPaused&&(c.delayRemaining=c.delay-b+c.delayBegin,c.delayPaused=!0,clearTimeout(c.delayTimer.setTimeout))}function i(a,b){var c=g(a);c&&c.delayTimer&&c.delayPaused&&(c.delayPaused=!1,c.delayTimer.setTimeout=setTimeout(c.delayTimer.next,c.delayRemaining))}function j(a){return function(b){return Math.round(b*a)*(1/a)}}function k(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;e<p;++e){var f=j(c,a,d);if(0===f)return c;c-=(i(c,a,d)-b)/f}return c}function l(){for(var b=0;b<t;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do{g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g}while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!==f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0===i?h:m(b,c,c+u)}function o(){y=!0,a===c&&d===e||l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;w<4;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function l(a,b){var c=a;return u.isString(a)?y.Easings[a]||(c=!1):c=u.isArray(a)&&1===a.length?j.apply(null,a):u.isArray(a)&&2===a.length?z.apply(null,a.concat([b])):!(!u.isArray(a)||4!==a.length)&&k.apply(null,a),c===!1&&(c=y.Easings[y.defaults.easing]?y.defaults.easing:x),c}function m(a){if(a){var b=y.timestamp&&a!==!0?a:r.now(),c=y.State.calls.length;c>1e4&&(y.State.calls=e(y.State.calls),c=y.State.calls.length);for(var f=0;f<c;f++)if(y.State.calls[f]){var h=y.State.calls[f],i=h[0],j=h[2],k=h[3],l=!!k,q=null,s=h[5],t=h[6];if(k||(k=y.State.calls[f][3]=b-16),s){if(s.resume!==!0)continue;k=h[3]=Math.round(b-t-16),h[5]=null}t=h[6]=b-k;for(var v=Math.min(t/j.duration,1),w=0,x=i.length;w<x;w++){var z=i[w],B=z.element;if(g(B)){var D=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var E=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];o.each(E,function(a,b){A.setPropertyValue(B,"display",b)})}A.setPropertyValue(B,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&A.setPropertyValue(B,"visibility",j.visibility);for(var F in z)if(z.hasOwnProperty(F)&&"element"!==F){var G,H=z[F],I=u.isString(H.easing)?y.Easings[H.easing]:H.easing;if(u.isString(H.pattern)){var J=1===v?function(a,b,c){var d=H.endValue[b];return c?Math.round(d):d}:function(a,b,c){var d=H.startValue[b],e=H.endValue[b]-d,f=d+e*I(v,j,e);return c?Math.round(f):f};G=H.pattern.replace(/{(\d+)(!)?}/g,J)}else if(1===v)G=H.endValue;else{var K=H.endValue-H.startValue;G=H.startValue+K*I(v,j,K)}if(!l&&G===H.currentValue)continue;if(H.currentValue=G,"tween"===F)q=G;else{var L;if(A.Hooks.registered[F]){L=A.Hooks.getRoot(F);var M=g(B).rootPropertyValueCache[L];M&&(H.rootPropertyValue=M)}var N=A.setPropertyValue(B,F,H.currentValue+(p<9&&0===parseFloat(G)?"":H.unitType),H.rootPropertyValue,H.scrollData);A.Hooks.registered[F]&&(A.Normalizations.registered[L]?g(B).rootPropertyValueCache[L]=A.Normalizations.registered[L]("extract",null,N[1]):g(B).rootPropertyValueCache[L]=N[1]),"transform"===N[0]&&(D=!0)}}j.mobileHA&&g(B).transformCache.translate3d===d&&(g(B).transformCache.translate3d="(0px, 0px, 0px)",D=!0),D&&A.flushTransformCache(B)}}j.display!==d&&"none"!==j.display&&(y.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(y.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],v,Math.max(0,k+j.duration-b),k,q),1===v&&n(f)}}y.State.isTicking&&C(m)}function n(a,b){if(!y.State.calls[a])return!1;for(var c=y.State.calls[a][0],e=y.State.calls[a][1],f=y.State.calls[a][2],h=y.State.calls[a][4],i=!1,j=0,k=c.length;j<k;j++){var l=c[j].element;b||f.loop||("none"===f.display&&A.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&A.setPropertyValue(l,"visibility",f.visibility));var m=g(l);if(f.loop!==!0&&(o.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(o.queue(l)[1]))&&m){m.isAnimating=!1,m.rootPropertyValueCache={};var n=!1;o.each(A.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=m.transformCache[b];m.transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete m.transformCache[b])}),f.mobileHA&&(n=!0,delete m.transformCache.translate3d),n&&A.flushTransformCache(l),A.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(r){setTimeout(function(){throw r},1)}h&&f.loop!==!0&&h(e),m&&f.loop===!0&&!b&&(o.each(m.tweensContainer,function(a,b){if(/^rotate/.test(a)&&(parseFloat(b.startValue)-parseFloat(b.endValue))%360==0){var c=b.startValue;b.startValue=b.endValue,b.endValue=c}/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),y(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&o.dequeue(l,f.queue)}y.State.calls[a]=!1;for(var p=0,q=y.State.calls.length;p<q;p++)if(y.State.calls[p]!==!1){i=!0;break}i===!1&&(y.State.isTicking=!1,delete y.State.calls,y.State.calls=[])}var o,p=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),q=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),r=function(){var a=b.performance||{};if("function"!=typeof a.now){var c=a.timing&&a.timing.navigationStart?a.timing.navigationStart:(new Date).getTime();a.now=function(){return(new Date).getTime()-c}}return a}(),s=function(){var a=Array.prototype.slice;try{return a.call(c.documentElement),a}catch(b){return function(b,c){var d=this.length;if("number"!=typeof b&&(b=0),"number"!=typeof c&&(c=d),this.slice)return a.call(this,b,c);var e,f=[],g=b>=0?b:Math.max(0,d+b),h=c<0?d+c:Math.min(c,d),i=h-g;if(i>0)if(f=new Array(i),this.charAt)for(e=0;e<i;e++)f[e]=this.charAt(g+e);else for(e=0;e<i;e++)f[e]=this[g+e];return f}}}(),t=function(){return Array.prototype.includes?function(a,b){return a.includes(b)}:Array.prototype.indexOf?function(a,b){return a.indexOf(b)>=0}:function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1}},u={isNumber:function(a){return"number"==typeof a},isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isWrapped:function(a){return a&&a!==b&&u.isNumber(a.length)&&!u.isString(a)&&!u.isFunction(a)&&!u.isNode(a)&&(0===a.length||u.isNode(a[0]))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}},v=!1;if(a.fn&&a.fn.jquery?(o=a,v=!0):o=b.Velocity.Utilities,p<=8&&!v)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(p<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var w=400,x="swing",y={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:o,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:w,easing:x,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(a){o.data(a,"velocity",{isSVG:u.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:0},debug:!1,timestamp:!0,pauseAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||c[2].queue===!1))return!0;c[5]={resume:!1}}}),o.each(y.State.delayedElements,function(a,c){c&&h(c,b)})},resumeAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||c[2].queue===!1))return!0;c[5]&&(c[5].resume=!0)}}),o.each(y.State.delayedElements,function(a,c){c&&i(c,b)})}};b.pageYOffset!==d?(y.State.scrollAnchor=b,y.State.scrollPropertyLeft="pageXOffset",y.State.scrollPropertyTop="pageYOffset"):(y.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,y.State.scrollPropertyLeft="scrollLeft",y.State.scrollPropertyTop="scrollTop");var z=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*.016):g=.016;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>1e-4&&Math.abs(h.v)>1e-4))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();y.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},o.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){y.Easings[b[0]]=k.apply(null,b[1])});var A=y.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<A.Lists.colors.length;a++){var b="color"===A.Lists.colors[a]?"0 0 0 1":"255 255 255 1";A.Hooks.templates[A.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(p)for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(A.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),A.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(" ");for(var g in e)if(e.hasOwnProperty(g)){var h=c+e[g],i=g;A.Hooks.registered[h]=[c,i]}}},getRoot:function(a){var b=A.Hooks.registered[a];return b?b[0]:a},getUnit:function(a,b){var c=(a.substr(b||0,5).match(/^[a-z%]+/)||[])[0]||"";return c&&t(A.Lists.units,c)?c:""},fixColors:function(a){return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(a,b,c){return A.Lists.colorNames.hasOwnProperty(c)?(b?b:"rgba(")+A.Lists.colorNames[c]+(b?"":",1)"):b+c})},cleanRootPropertyValue:function(a,b){return A.RegEx.valueUnwrap.test(b)&&(b=b.match(A.RegEx.valueUnwrap)[1]),A.Values.isCSSNullValue(b)&&(b=A.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=A.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=A.Hooks.cleanRootPropertyValue(d,b),b.toString().match(A.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=A.Hooks.registered[a];if(d){var e,f=d[0],g=d[1];return c=A.Hooks.cleanRootPropertyValue(f,c),e=c.toString().match(A.RegEx.valueSplit),e[g]=b,e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return A.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(A.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return y.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(p<=8)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){function a(a,b,c){if("border-box"===A.getPropertyValue(b,"boxSizing").toString().toLowerCase()===(c||!1)){var d,e,f=0,g="width"===a?["Left","Right"]:["Top","Bottom"],h=["padding"+g[0],"padding"+g[1],"border"+g[0]+"Width","border"+g[1]+"Width"];for(d=0;d<h.length;d++)e=parseFloat(A.getPropertyValue(b,h[d])),isNaN(e)||(f+=e);return c?-f:f}return 0}function b(b,c){return function(d,e,f){switch(d){case"name":return b;case"extract":return parseFloat(f)+a(b,e,c);case"inject":return parseFloat(f)-a(b,e,c)+"px"}}}p&&!(p>9)||y.State.isGingerbread||(A.Lists.transformsBase=A.Lists.transformsBase.concat(A.Lists.transforms3D));for(var c=0;c<A.Lists.transformsBase.length;c++)!function(){var a=A.Lists.transformsBase[c];A.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[a]===d?/^scale/i.test(a)?1:0:g(c).transformCache[a].replace(/[()]/g,"");case"inject":var f=!1;switch(a.substr(0,a.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":y.State.isAndroid&&g(c).transformCache[a]===d&&e<1&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[a]="("+e+")"),g(c).transformCache[a]}}}();for(var e=0;e<A.Lists.colors.length;e++)!function(){var a=A.Lists.colors[e];A.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return a;case"extract":var f;if(A.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:A.RegEx.isHex.test(e)?g="rgb("+A.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(A.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!p||p>8)&&3===f.split(" ").length&&(f+=" 1"),f;case"inject":return/^rgb/.test(e)?e:(p<=8?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(p<=8?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();A.Normalizations.registered.innerWidth=b("width",!0),A.Normalizations.registered.innerHeight=b("height",!0),A.Normalizations.registered.outerWidth=b("width"),A.Normalizations.registered.outerHeight=b("height")}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(p||y.State.isAndroid&&!y.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(y.State.prefixMatches[a])return[y.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;c<d;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),u.isString(y.State.prefixElement.style[e]))return y.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,c,d){return b+b+c+c+d+d}),b=c.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return!a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){if(a)if(a.classList)a.classList.add(b);else if(u.isString(a.className))a.className+=(a.className.length?" ":"")+b;else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c+(c?" ":"")+b)}},removeClass:function(a,b){if(a)if(a.classList)a.classList.remove(b);else if(u.isString(a.className))a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ");else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c.replace(new RegExp("(^|s)"+b.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(a,c,e,f){function h(a,c){var e=0;if(p<=8)e=o.css(a,c);else{var i=!1;/^(width|height)$/.test(c)&&0===A.getPropertyValue(a,"display")&&(i=!0,A.setPropertyValue(a,"display",A.Values.getDisplayType(a)));var j=function(){i&&A.setPropertyValue(a,"display","none")};if(!f){if("height"===c&&"border-box"!==A.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(A.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(A.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(A.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(A.getPropertyValue(a,"paddingBottom"))||0);return j(),k}if("width"===c&&"border-box"!==A.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(A.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(A.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(A.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(A.getPropertyValue(a,"paddingRight"))||0);return j(),l}}var m;m=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),e=9===p&&"filter"===c?m.getPropertyValue(c):m[c],""!==e&&null!==e||(e=a.style[c]),j()}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var n=h(a,"position");("fixed"===n||"absolute"===n&&/top|left/i.test(c))&&(e=o(a).position()[c]+"px")}return e}var i;if(A.Hooks.registered[c]){var j=c,k=A.Hooks.getRoot(j);e===d&&(e=A.getPropertyValue(a,A.Names.prefixCheck(k)[0])),A.Normalizations.registered[k]&&(e=A.Normalizations.registered[k]("extract",a,e)),i=A.Hooks.extractValue(j,e)}else if(A.Normalizations.registered[c]){var l,m;l=A.Normalizations.registered[c]("name",a),"transform"!==l&&(m=h(a,A.Names.prefixCheck(l)[0]),A.Values.isCSSNullValue(m)&&A.Hooks.templates[c]&&(m=A.Hooks.templates[c][1])),i=A.Normalizations.registered[c]("extract",a,m)}if(!/^[\d-]/.test(i)){var n=g(a);if(n&&n.isSVG&&A.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(q){i=0}else i=a.getAttribute(c);else i=h(a,A.Names.prefixCheck(c)[0])}return A.Values.isCSSNullValue(i)&&(i=0),y.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(A.Normalizations.registered[c]&&"transform"===A.Normalizations.registered[c]("name",a))A.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(A.Hooks.registered[c]){var i=c,j=A.Hooks.getRoot(c);e=e||A.getPropertyValue(a,j),d=A.Hooks.injectValue(i,d,e),c=j}if(A.Normalizations.registered[c]&&(d=A.Normalizations.registered[c]("inject",a,d),c=A.Normalizations.registered[c]("name",a)),h=A.Names.prefixCheck(c)[0],p<=8)try{a.style[h]=d}catch(l){y.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else{var k=g(a);k&&k.isSVG&&A.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d}y.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){var b="",c=g(a);if((p||y.State.isAndroid&&!y.State.isChrome)&&c&&c.isSVG){var d=function(b){return parseFloat(A.getPropertyValue(a,b))},e={translate:[d("translateX"),d("translateY")],skewX:[d("skewX")],skewY:[d("skewY")],scale:1!==d("scale")?[d("scale"),d("scale")]:[d("scaleX"),d("scaleY")],rotate:[d("rotateZ"),0,0]};o.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),e[a]&&(b+=a+"("+e[a].join(" ")+") ",delete e[a])})}else{var f,h;o.each(g(a).transformCache,function(c){if(f=g(a).transformCache[c],"transformPerspective"===c)return h=f,!0;9===p&&"rotateZ"===c&&(c="rotate"),b+=c+f+" "}),h&&(b="perspective"+h+" "+b)}A.setPropertyValue(a,"transform",b)}};A.Hooks.register(),A.Normalizations.register(),y.hook=function(a,b,c){var e;return a=f(a),o.each(a,function(a,f){if(g(f)===d&&y.init(f),c===d)e===d&&(e=A.getPropertyValue(f,b));else{var h=A.setPropertyValue(f,b,c);"transform"===h[0]&&y.CSS.flushTransformCache(f),e=h}}),e};var B=function(){function a(){return k?z.promise||null:p}function e(a,e){function f(f){var k,n;if(i.begin&&0===D)try{i.begin.call(r,r)}catch(V){setTimeout(function(){throw V},1)}if("scroll"===G){var p,q,w,x=/^x$/i.test(i.axis)?"Left":"Top",B=parseFloat(i.offset)||0;i.container?u.isWrapped(i.container)||u.isNode(i.container)?(i.container=i.container[0]||i.container,p=i.container["scroll"+x],w=p+o(a).position()[x.toLowerCase()]+B):i.container=null:(p=y.State.scrollAnchor[y.State["scrollProperty"+x]],q=y.State.scrollAnchor[y.State["scrollProperty"+("Left"===x?"Top":"Left")]],w=o(a).offset()[x.toLowerCase()]+B),j={scroll:{rootPropertyValue:!1,startValue:p,currentValue:p,endValue:w,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:x,alternateValue:q}},element:a},y.debug&&console.log("tweensContainer (scroll): ",j.scroll,a)}else if("reverse"===G){if(!(k=g(a)))return;if(!k.tweensContainer)return void o.dequeue(a,i.queue);"none"===k.opts.display&&(k.opts.display="auto"),"hidden"===k.opts.visibility&&(k.opts.visibility="visible"),k.opts.loop=!1,k.opts.begin=null,k.opts.complete=null,v.easing||delete i.easing,v.duration||delete i.duration,i=o.extend({},k.opts,i),n=o.extend(!0,{},k?k.tweensContainer:null);for(var E in n)if(n.hasOwnProperty(E)&&"element"!==E){var F=n[E].startValue;n[E].startValue=n[E].currentValue=n[E].endValue,n[E].endValue=F,u.isEmptyObject(v)||(n[E].easing=i.easing),y.debug&&console.log("reverse tweensContainer ("+E+"): "+JSON.stringify(n[E]),a)}j=n}else if("start"===G){k=g(a),k&&k.tweensContainer&&k.isAnimating===!0&&(n=k.tweensContainer);var H=function(e,f){var g,l=A.Hooks.getRoot(e),m=!1,p=f[0],q=f[1],r=f[2]
;if(!(k&&k.isSVG||"tween"===l||A.Names.prefixCheck(l)[1]!==!1||A.Normalizations.registered[l]!==d))return void(y.debug&&console.log("Skipping ["+l+"] due to a lack of browser support."));(i.display!==d&&null!==i.display&&"none"!==i.display||i.visibility!==d&&"hidden"!==i.visibility)&&/opacity|filter/.test(e)&&!r&&0!==p&&(r=0),i._cacheValues&&n&&n[e]?(r===d&&(r=n[e].endValue+n[e].unitType),m=k.rootPropertyValueCache[l]):A.Hooks.registered[e]?r===d?(m=A.getPropertyValue(a,l),r=A.getPropertyValue(a,e,m)):m=A.Hooks.templates[l][1]:r===d&&(r=A.getPropertyValue(a,e));var s,t,v,w=!1,x=function(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=A.Values.getUnitType(a)),[d,c]};if(r!==p&&u.isString(r)&&u.isString(p)){g="";var z=0,B=0,C=[],D=[],E=0,F=0,G=0;for(r=A.Hooks.fixColors(r),p=A.Hooks.fixColors(p);z<r.length&&B<p.length;){var H=r[z],I=p[B];if(/[\d\.-]/.test(H)&&/[\d\.-]/.test(I)){for(var J=H,K=I,L=".",N=".";++z<r.length;){if((H=r[z])===L)L="..";else if(!/\d/.test(H))break;J+=H}for(;++B<p.length;){if((I=p[B])===N)N="..";else if(!/\d/.test(I))break;K+=I}var O=A.Hooks.getUnit(r,z),P=A.Hooks.getUnit(p,B);if(z+=O.length,B+=P.length,O===P)J===K?g+=J+O:(g+="{"+C.length+(F?"!":"")+"}"+O,C.push(parseFloat(J)),D.push(parseFloat(K)));else{var Q=parseFloat(J),R=parseFloat(K);g+=(E<5?"calc":"")+"("+(Q?"{"+C.length+(F?"!":"")+"}":"0")+O+" + "+(R?"{"+(C.length+(Q?1:0))+(F?"!":"")+"}":"0")+P+")",Q&&(C.push(Q),D.push(0)),R&&(C.push(0),D.push(R))}}else{if(H!==I){E=0;break}g+=H,z++,B++,0===E&&"c"===H||1===E&&"a"===H||2===E&&"l"===H||3===E&&"c"===H||E>=4&&"("===H?E++:(E&&E<5||E>=4&&")"===H&&--E<5)&&(E=0),0===F&&"r"===H||1===F&&"g"===H||2===F&&"b"===H||3===F&&"a"===H||F>=3&&"("===H?(3===F&&"a"===H&&(G=1),F++):G&&","===H?++G>3&&(F=G=0):(G&&F<(G?5:4)||F>=(G?4:3)&&")"===H&&--F<(G?5:4))&&(F=G=0)}}z===r.length&&B===p.length||(y.debug&&console.error('Trying to pattern match mis-matched strings ["'+p+'", "'+r+'"]'),g=d),g&&(C.length?(y.debug&&console.log('Pattern found "'+g+'" -> ',C,D,"["+r+","+p+"]"),r=C,p=D,t=v=""):g=d)}g||(s=x(e,r),r=s[0],v=s[1],s=x(e,p),p=s[0].replace(/^([+-\/*])=/,function(a,b){return w=b,""}),t=s[1],r=parseFloat(r)||0,p=parseFloat(p)||0,"%"===t&&(/^(fontSize|lineHeight)$/.test(e)?(p/=100,t="em"):/^scale/.test(e)?(p/=100,t=""):/(Red|Green|Blue)$/i.test(e)&&(p=p/100*255,t="")));if(/[\/*]/.test(w))t=v;else if(v!==t&&0!==r)if(0===p)t=v;else{h=h||function(){var d={myParent:a.parentNode||c.body,position:A.getPropertyValue(a,"position"),fontSize:A.getPropertyValue(a,"fontSize")},e=d.position===M.lastPosition&&d.myParent===M.lastParent,f=d.fontSize===M.lastFontSize;M.lastParent=d.myParent,M.lastPosition=d.position,M.lastFontSize=d.fontSize;var g={};if(f&&e)g.emToPx=M.lastEmToPx,g.percentToPxWidth=M.lastPercentToPxWidth,g.percentToPxHeight=M.lastPercentToPxHeight;else{var h=k&&k.isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");y.init(h),d.myParent.appendChild(h),o.each(["overflow","overflowX","overflowY"],function(a,b){y.CSS.setPropertyValue(h,b,"hidden")}),y.CSS.setPropertyValue(h,"position",d.position),y.CSS.setPropertyValue(h,"fontSize",d.fontSize),y.CSS.setPropertyValue(h,"boxSizing","content-box"),o.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){y.CSS.setPropertyValue(h,b,"100%")}),y.CSS.setPropertyValue(h,"paddingLeft","100em"),g.percentToPxWidth=M.lastPercentToPxWidth=(parseFloat(A.getPropertyValue(h,"width",null,!0))||1)/100,g.percentToPxHeight=M.lastPercentToPxHeight=(parseFloat(A.getPropertyValue(h,"height",null,!0))||1)/100,g.emToPx=M.lastEmToPx=(parseFloat(A.getPropertyValue(h,"paddingLeft"))||1)/100,d.myParent.removeChild(h)}return null===M.remToPx&&(M.remToPx=parseFloat(A.getPropertyValue(c.body,"fontSize"))||16),null===M.vwToPx&&(M.vwToPx=parseFloat(b.innerWidth)/100,M.vhToPx=parseFloat(b.innerHeight)/100),g.remToPx=M.remToPx,g.vwToPx=M.vwToPx,g.vhToPx=M.vhToPx,y.debug>=1&&console.log("Unit ratios: "+JSON.stringify(g),a),g}();var S=/margin|padding|left|right|width|text|word|letter/i.test(e)||/X$/.test(e)||"x"===e?"x":"y";switch(v){case"%":r*="x"===S?h.percentToPxWidth:h.percentToPxHeight;break;case"px":break;default:r*=h[v+"ToPx"]}switch(t){case"%":r*=1/("x"===S?h.percentToPxWidth:h.percentToPxHeight);break;case"px":break;default:r*=1/h[t+"ToPx"]}}switch(w){case"+":p=r+p;break;case"-":p=r-p;break;case"*":p*=r;break;case"/":p=r/p}j[e]={rootPropertyValue:m,startValue:r,currentValue:r,endValue:p,unitType:t,easing:q},g&&(j[e].pattern=g),y.debug&&console.log("tweensContainer ("+e+"): "+JSON.stringify(j[e]),a)};for(var I in s)if(s.hasOwnProperty(I)){var J=A.Names.camelCase(I),K=function(b,c){var d,f,g;return u.isFunction(b)&&(b=b.call(a,e,C)),u.isArray(b)?(d=b[0],!u.isArray(b[1])&&/^[\d-]/.test(b[1])||u.isFunction(b[1])||A.RegEx.isHex.test(b[1])?g=b[1]:u.isString(b[1])&&!A.RegEx.isHex.test(b[1])&&y.Easings[b[1]]||u.isArray(b[1])?(f=c?b[1]:l(b[1],i.duration),g=b[2]):g=b[1]||b[2]):d=b,c||(f=f||i.easing),u.isFunction(d)&&(d=d.call(a,e,C)),u.isFunction(g)&&(g=g.call(a,e,C)),[d||0,f,g]}(s[I]);if(t(A.Lists.colors,J)){var L=K[0],O=K[1],P=K[2];if(A.RegEx.isHex.test(L)){for(var Q=["Red","Green","Blue"],R=A.Values.hexToRgb(L),S=P?A.Values.hexToRgb(P):d,T=0;T<Q.length;T++){var U=[R[T]];O&&U.push(O),S!==d&&U.push(S[T]),H(J+Q[T],U)}continue}}H(J,K)}j.element=a}j.element&&(A.Values.addClass(a,"velocity-animating"),N.push(j),k=g(a),k&&(""===i.queue&&(k.tweensContainer=j,k.opts=i),k.isAnimating=!0),D===C-1?(y.State.calls.push([N,r,i,null,z.resolver,null,0]),y.State.isTicking===!1&&(y.State.isTicking=!0,m())):D++)}var h,i=o.extend({},y.defaults,v),j={};switch(g(a)===d&&y.init(a),parseFloat(i.delay)&&i.queue!==!1&&o.queue(a,i.queue,function(b){y.velocityQueueEntryFlag=!0;var c=y.State.delayedElements.count++;y.State.delayedElements[c]=a;var d=function(a){return function(){y.State.delayedElements[a]=!1,b()}}(c);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(b,parseFloat(i.delay)),next:d}}),i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":i.duration=w;break;case"slow":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}if(y.mock!==!1&&(y.mock===!0?i.duration=i.delay=1:(i.duration*=parseFloat(y.mock)||1,i.delay*=parseFloat(y.mock)||1)),i.easing=l(i.easing,i.duration),i.begin&&!u.isFunction(i.begin)&&(i.begin=null),i.progress&&!u.isFunction(i.progress)&&(i.progress=null),i.complete&&!u.isFunction(i.complete)&&(i.complete=null),i.display!==d&&null!==i.display&&(i.display=i.display.toString().toLowerCase(),"auto"===i.display&&(i.display=y.CSS.Values.getDisplayType(a))),i.visibility!==d&&null!==i.visibility&&(i.visibility=i.visibility.toString().toLowerCase()),i.mobileHA=i.mobileHA&&y.State.isMobile&&!y.State.isGingerbread,i.queue===!1)if(i.delay){var k=y.State.delayedElements.count++;y.State.delayedElements[k]=a;var n=function(a){return function(){y.State.delayedElements[a]=!1,f()}}(k);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(f,parseFloat(i.delay)),next:n}}else f();else o.queue(a,i.queue,function(a,b){if(b===!0)return z.promise&&z.resolver(r),!0;y.velocityQueueEntryFlag=!0,f(a)});""!==i.queue&&"fx"!==i.queue||"inprogress"===o.queue(a)[0]||o.dequeue(a)}var j,k,p,q,r,s,v,x=arguments[0]&&(arguments[0].p||o.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||u.isString(arguments[0].properties));u.isWrapped(this)?(k=!1,q=0,r=this,p=this):(k=!0,q=1,r=x?arguments[0].elements||arguments[0].e:arguments[0]);var z={promise:null,resolver:null,rejecter:null};if(k&&y.Promise&&(z.promise=new y.Promise(function(a,b){z.resolver=a,z.rejecter=b})),x?(s=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(s=arguments[q],v=arguments[q+1]),!(r=f(r)))return void(z.promise&&(s&&v&&v.promiseRejectEmpty===!1?z.resolver():z.rejecter()));var C=r.length,D=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(s)&&!o.isPlainObject(v)){var E=q+1;v={};for(var F=E;F<arguments.length;F++)u.isArray(arguments[F])||!/^(fast|normal|slow)$/i.test(arguments[F])&&!/^\d/.test(arguments[F])?u.isString(arguments[F])||u.isArray(arguments[F])?v.easing=arguments[F]:u.isFunction(arguments[F])&&(v.complete=arguments[F]):v.duration=arguments[F]}var G;switch(s){case"scroll":G="scroll";break;case"reverse":G="reverse";break;case"pause":var H=(new Date).getTime();return o.each(r,function(a,b){h(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?"":v;return f!==!0&&b[2].queue!==f&&(v!==d||b[2].queue!==!1)||(o.each(r,function(a,d){if(d===e)return b[5]={resume:!1},c=!0,!1}),!c&&void 0)})}),a();case"resume":return o.each(r,function(a,b){i(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?"":v;return f!==!0&&b[2].queue!==f&&(v!==d||b[2].queue!==!1)||(!b[5]||(o.each(r,function(a,d){if(d===e)return b[5].resume=!0,c=!0,!1}),!c&&void 0))})}),a();case"finish":case"finishAll":case"stop":o.each(r,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==s||v!==!0&&!u.isString(v)||(o.each(o.queue(b,u.isString(v)?v:""),function(a,b){u.isFunction(b)&&b()}),o.queue(b,u.isString(v)?v:"",[]))});var I=[];return o.each(y.State.calls,function(a,b){b&&o.each(b[1],function(c,e){var f=v===d?"":v;if(f!==!0&&b[2].queue!==f&&(v!==d||b[2].queue!==!1))return!0;o.each(r,function(c,d){if(d===e)if((v===!0||u.isString(v))&&(o.each(o.queue(d,u.isString(v)?v:""),function(a,b){u.isFunction(b)&&b(null,!0)}),o.queue(d,u.isString(v)?v:"",[])),"stop"===s){var h=g(d);h&&h.tweensContainer&&f!==!1&&o.each(h.tweensContainer,function(a,b){b.endValue=b.currentValue}),I.push(a)}else"finish"!==s&&"finishAll"!==s||(b[2].duration=1)})})}),"stop"===s&&(o.each(I,function(a,b){n(b,!0)}),z.promise&&z.resolver(r)),a();default:if(!o.isPlainObject(s)||u.isEmptyObject(s)){if(u.isString(s)&&y.Redirects[s]){j=o.extend({},v);var J=j.duration,K=j.delay||0;return j.backwards===!0&&(r=o.extend(!0,[],r).reverse()),o.each(r,function(a,b){parseFloat(j.stagger)?j.delay=K+parseFloat(j.stagger)*a:u.isFunction(j.stagger)&&(j.delay=K+j.stagger.call(b,a,C)),j.drag&&(j.duration=parseFloat(J)||(/^(callout|transition)/.test(s)?1e3:w),j.duration=Math.max(j.duration*(j.backwards?1-a/C:(a+1)/C),.75*j.duration,200)),y.Redirects[s].call(b,b,j||{},a,C,r,z.promise?z:d)}),a()}var L="Velocity: First argument ("+s+") was not a property map, a known action, or a registered redirect. Aborting.";return z.promise?z.rejecter(new Error(L)):b.console&&console.log(L),a()}G="start"}var M={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},N=[];o.each(r,function(a,b){u.isNode(b)&&e(b,a)}),j=o.extend({},y.defaults,v),j.loop=parseInt(j.loop,10);var O=2*j.loop-1;if(j.loop)for(var P=0;P<O;P++){var Q={delay:j.delay,progress:j.progress};P===O-1&&(Q.display=j.display,Q.visibility=j.visibility,Q.complete=j.complete),B(r,"reverse",Q)}return a()};y=o.extend(B,y),y.animate=B;var C=b.requestAnimationFrame||q;if(!y.State.isMobile&&c.hidden!==d){var D=function(){c.hidden?(C=function(a){return setTimeout(function(){a(!0)},16)},m()):C=b.requestAnimationFrame||q};D(),c.addEventListener("visibilitychange",D)}return a.Velocity=y,a!==b&&(a.fn.velocity=B,a.fn.velocity.defaults=y.defaults),o.each(["Down","Up"],function(a,b){y.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.begin,k=i.complete,l={},m={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};i.display===d&&(i.display="Down"===b?"inline"===y.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){0===e&&j&&j.call(g,g);for(var c in m)if(m.hasOwnProperty(c)){l[c]=a.style[c];var d=A.getPropertyValue(a,c);m[c]="Down"===b?[d,0]:[0,d]}l.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in l)l.hasOwnProperty(b)&&(a.style[b]=l[b]);e===f-1&&(k&&k.call(g,g),h&&h.resolver(g))},y(a,m,i)}}),o.each(["In","Out"],function(a,b){y.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.complete,k={opacity:"In"===b?1:0};0!==e&&(i.begin=null),i.complete=e!==f-1?null:function(){j&&j.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),y(this,k,i)}}),y}(window.jQuery||window.Zepto||window,window,window?window.document:undefined)});
/**
 * Swiper 3.4.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: October 16, 2016
 */
!function(){"use strict";function e(e){e.fn.swiper=function(a){var s;return e(this).each(function(){var e=new t(this,a);s||(s=e)}),s}}var a,t=function(e,i){function n(e){return Math.floor(e)}function o(){var e=S.params.autoplay,a=S.slides.eq(S.activeIndex);a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||S.params.autoplay),S.autoplayTimeoutId=setTimeout(function(){S.params.loop?(S.fixLoop(),S._slideNext(),S.emit("onAutoplay",S)):S.isEnd?i.autoplayStopOnLast?S.stopAutoplay():(S._slideTo(0),S.emit("onAutoplay",S)):(S._slideNext(),S.emit("onAutoplay",S))},e)}function l(e,t){var s=a(e.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var i;return s.parents().each(function(e,a){a===t&&(i=t)}),i?t:void 0}if(0!==s.length)return s[0]}function p(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){S.onResize(!0),S.emit("onObserverUpdate",S,e)})});s.observe(e,{attributes:"undefined"==typeof a.attributes||a.attributes,childList:"undefined"==typeof a.childList||a.childList,characterData:"undefined"==typeof a.characterData||a.characterData}),S.observers.push(s)}function d(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!S.params.allowSwipeToNext&&(S.isHorizontal()&&39===a||!S.isHorizontal()&&40===a))return!1;if(!S.params.allowSwipeToPrev&&(S.isHorizontal()&&37===a||!S.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(S.container.parents("."+S.params.slideClass).length>0&&0===S.container.parents("."+S.params.slideActiveClass).length)return;var s={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,r=window.innerHeight,n=S.container.offset();S.rtl&&(n.left=n.left-S.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+S.width,n.top],[n.left,n.top+S.height],[n.left+S.width,n.top+S.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+i&&p[1]>=s.top&&p[1]<=s.top+r&&(t=!0)}if(!t)return}S.isHorizontal()?(37!==a&&39!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!S.rtl||37===a&&S.rtl)&&S.slideNext(),(37===a&&!S.rtl||39===a&&S.rtl)&&S.slidePrev()):(38!==a&&40!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&S.slideNext(),38===a&&S.slidePrev())}}function u(){var e="onwheel",a=e in document;if(!a){var t=document.createElement("div");t.setAttribute(e,"return;"),a="function"==typeof t[e]}return!a&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&(a=document.implementation.hasFeature("Events.wheel","3.0")),a}function c(e){e.originalEvent&&(e=e.originalEvent);var a=0,t=S.rtl?-1:1,s=m(e);if(S.params.mousewheelForceToAxis)if(S.isHorizontal()){if(!(Math.abs(s.pixelX)>Math.abs(s.pixelY)))return;a=s.pixelX*t}else{if(!(Math.abs(s.pixelY)>Math.abs(s.pixelX)))return;a=s.pixelY}else a=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*t:-s.pixelY;if(0!==a){if(S.params.mousewheelInvert&&(a=-a),S.params.freeMode){var i=S.getWrapperTranslate()+a*S.params.mousewheelSensitivity,r=S.isBeginning,n=S.isEnd;if(i>=S.minTranslate()&&(i=S.minTranslate()),i<=S.maxTranslate()&&(i=S.maxTranslate()),S.setWrapperTransition(0),S.setWrapperTranslate(i),S.updateProgress(),S.updateActiveIndex(),(!r&&S.isBeginning||!n&&S.isEnd)&&S.updateClasses(),S.params.freeModeSticky?(clearTimeout(S.mousewheel.timeout),S.mousewheel.timeout=setTimeout(function(){S.slideReset()},300)):S.params.lazyLoading&&S.lazy&&S.lazy.load(),S.emit("onScroll",S,e),S.params.autoplay&&S.params.autoplayDisableOnInteraction&&S.stopAutoplay(),0===i||i===S.maxTranslate())return}else{if((new window.Date).getTime()-S.mousewheel.lastScrollTime>60)if(a<0)if(S.isEnd&&!S.params.loop||S.animating){if(S.params.mousewheelReleaseOnEdges)return!0}else S.slideNext(),S.emit("onScroll",S,e);else if(S.isBeginning&&!S.params.loop||S.animating){if(S.params.mousewheelReleaseOnEdges)return!0}else S.slidePrev(),S.emit("onScroll",S,e);S.mousewheel.lastScrollTime=(new window.Date).getTime()}return e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function m(e){var a=10,t=40,s=800,i=0,r=0,n=0,o=0;return"detail"in e&&(r=e.detail),"wheelDelta"in e&&(r=-e.wheelDelta/120),"wheelDeltaY"in e&&(r=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(i=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(i=r,r=0),n=i*a,o=r*a,"deltaY"in e&&(o=e.deltaY),"deltaX"in e&&(n=e.deltaX),(n||o)&&e.deltaMode&&(1===e.deltaMode?(n*=t,o*=t):(n*=s,o*=s)),n&&!i&&(i=n<1?-1:1),o&&!r&&(r=o<1?-1:1),{spinX:i,spinY:r,pixelX:n,pixelY:o}}function h(e,t){e=a(e);var s,i,r,n=S.rtl?-1:1;s=e.attr("data-swiper-parallax")||"0",i=e.attr("data-swiper-parallax-x"),r=e.attr("data-swiper-parallax-y"),i||r?(i=i||"0",r=r||"0"):S.isHorizontal()?(i=s,r="0"):(r=s,i="0"),i=i.indexOf("%")>=0?parseInt(i,10)*t*n+"%":i*t*n+"px",r=r.indexOf("%")>=0?parseInt(r,10)*t+"%":r*t+"px",e.transform("translate3d("+i+", "+r+",0px)")}function g(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof t))return new t(e,i);var f={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},v=i&&i.virtualTranslate;i=i||{};var w={};for(var y in i)if("object"!=typeof i[y]||null===i[y]||(i[y].nodeType||i[y]===window||i[y]===document||"undefined"!=typeof s&&i[y]instanceof s||"undefined"!=typeof jQuery&&i[y]instanceof jQuery))w[y]=i[y];else{w[y]={};for(var x in i[y])w[y][x]=i[y][x]}for(var T in f)if("undefined"==typeof i[T])i[T]=f[T];else if("object"==typeof i[T])for(var b in f[T])"undefined"==typeof i[T][b]&&(i[T][b]=f[T][b]);var S=this;if(S.params=i,S.originalParams=w,S.classNames=[],"undefined"!=typeof a&&"undefined"!=typeof s&&(a=s),("undefined"!=typeof a||(a="undefined"==typeof s?window.Dom7||window.Zepto||window.jQuery:s))&&(S.$=a,S.currentBreakpoint=void 0,S.getActiveBreakpoint=function(){if(!S.params.breakpoints)return!1;var e,a=!1,t=[];for(e in S.params.breakpoints)S.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)e=t[s],e>=window.innerWidth&&!a&&(a=e);return a||"max"},S.setBreakpoint=function(){var e=S.getActiveBreakpoint();if(e&&S.currentBreakpoint!==e){var a=e in S.params.breakpoints?S.params.breakpoints[e]:S.originalParams,t=S.params.loop&&a.slidesPerView!==S.params.slidesPerView;for(var s in a)S.params[s]=a[s];S.currentBreakpoint=e,t&&S.destroyLoop&&S.reLoop(!0)}},S.params.breakpoints&&S.setBreakpoint(),S.container=a(e),0!==S.container.length)){if(S.container.length>1){var C=[];return S.container.each(function(){C.push(new t(this,i))}),C}S.container[0].swiper=S,S.container.data("swiper",S),S.classNames.push(S.params.containerModifierClass+S.params.direction),S.params.freeMode&&S.classNames.push(S.params.containerModifierClass+"free-mode"),S.support.flexbox||(S.classNames.push(S.params.containerModifierClass+"no-flexbox"),S.params.slidesPerColumn=1),S.params.autoHeight&&S.classNames.push(S.params.containerModifierClass+"autoheight"),(S.params.parallax||S.params.watchSlidesVisibility)&&(S.params.watchSlidesProgress=!0),S.params.touchReleaseOnEdges&&(S.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(S.params.effect)>=0&&(S.support.transforms3d?(S.params.watchSlidesProgress=!0,S.classNames.push(S.params.containerModifierClass+"3d")):S.params.effect="slide"),"slide"!==S.params.effect&&S.classNames.push(S.params.containerModifierClass+S.params.effect),"cube"===S.params.effect&&(S.params.resistanceRatio=0,S.params.slidesPerView=1,S.params.slidesPerColumn=1,S.params.slidesPerGroup=1,S.params.centeredSlides=!1,S.params.spaceBetween=0,S.params.virtualTranslate=!0,S.params.setWrapperSize=!1),"fade"!==S.params.effect&&"flip"!==S.params.effect||(S.params.slidesPerView=1,S.params.slidesPerColumn=1,S.params.slidesPerGroup=1,S.params.watchSlidesProgress=!0,S.params.spaceBetween=0,S.params.setWrapperSize=!1,"undefined"==typeof v&&(S.params.virtualTranslate=!0)),S.params.grabCursor&&S.support.touch&&(S.params.grabCursor=!1),S.wrapper=S.container.children("."+S.params.wrapperClass),S.params.pagination&&(S.paginationContainer=a(S.params.pagination),S.params.uniqueNavElements&&"string"==typeof S.params.pagination&&S.paginationContainer.length>1&&1===S.container.find(S.params.pagination).length&&(S.paginationContainer=S.container.find(S.params.pagination)),"bullets"===S.params.paginationType&&S.params.paginationClickable?S.paginationContainer.addClass(S.params.paginationModifierClass+"clickable"):S.params.paginationClickable=!1,S.paginationContainer.addClass(S.params.paginationModifierClass+S.params.paginationType)),(S.params.nextButton||S.params.prevButton)&&(S.params.nextButton&&(S.nextButton=a(S.params.nextButton),S.params.uniqueNavElements&&"string"==typeof S.params.nextButton&&S.nextButton.length>1&&1===S.container.find(S.params.nextButton).length&&(S.nextButton=S.container.find(S.params.nextButton))),S.params.prevButton&&(S.prevButton=a(S.params.prevButton),S.params.uniqueNavElements&&"string"==typeof S.params.prevButton&&S.prevButton.length>1&&1===S.container.find(S.params.prevButton).length&&(S.prevButton=S.container.find(S.params.prevButton)))),S.isHorizontal=function(){return"horizontal"===S.params.direction},S.rtl=S.isHorizontal()&&("rtl"===S.container[0].dir.toLowerCase()||"rtl"===S.container.css("direction")),S.rtl&&S.classNames.push(S.params.containerModifierClass+"rtl"),S.rtl&&(S.wrongRTL="-webkit-box"===S.wrapper.css("display")),S.params.slidesPerColumn>1&&S.classNames.push(S.params.containerModifierClass+"multirow"),S.device.android&&S.classNames.push(S.params.containerModifierClass+"android"),S.container.addClass(S.classNames.join(" ")),S.translate=0,S.progress=0,S.velocity=0,S.lockSwipeToNext=function(){S.params.allowSwipeToNext=!1,S.params.allowSwipeToPrev===!1&&S.params.grabCursor&&S.unsetGrabCursor()},S.lockSwipeToPrev=function(){S.params.allowSwipeToPrev=!1,S.params.allowSwipeToNext===!1&&S.params.grabCursor&&S.unsetGrabCursor()},S.lockSwipes=function(){S.params.allowSwipeToNext=S.params.allowSwipeToPrev=!1,S.params.grabCursor&&S.unsetGrabCursor()},S.unlockSwipeToNext=function(){S.params.allowSwipeToNext=!0,S.params.allowSwipeToPrev===!0&&S.params.grabCursor&&S.setGrabCursor()},S.unlockSwipeToPrev=function(){S.params.allowSwipeToPrev=!0,S.params.allowSwipeToNext===!0&&S.params.grabCursor&&S.setGrabCursor()},S.unlockSwipes=function(){S.params.allowSwipeToNext=S.params.allowSwipeToPrev=!0,S.params.grabCursor&&S.setGrabCursor()},S.setGrabCursor=function(e){S.container[0].style.cursor="move",S.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",S.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",S.container[0].style.cursor=e?"grabbing":"grab"},S.unsetGrabCursor=function(){S.container[0].style.cursor=""},S.params.grabCursor&&S.setGrabCursor(),S.imagesToLoad=[],S.imagesLoaded=0,S.loadImage=function(e,a,t,s,i,r){function n(){r&&r()}var o;e.complete&&i?n():a?(o=new window.Image,o.onload=n,o.onerror=n,s&&(o.sizes=s),t&&(o.srcset=t),a&&(o.src=a)):n()},S.preloadImages=function(){function e(){"undefined"!=typeof S&&null!==S&&(void 0!==S.imagesLoaded&&S.imagesLoaded++,S.imagesLoaded===S.imagesToLoad.length&&(S.params.updateOnImagesReady&&S.update(),S.emit("onImagesReady",S)))}S.imagesToLoad=S.container.find("img");for(var a=0;a<S.imagesToLoad.length;a++)S.loadImage(S.imagesToLoad[a],S.imagesToLoad[a].currentSrc||S.imagesToLoad[a].getAttribute("src"),S.imagesToLoad[a].srcset||S.imagesToLoad[a].getAttribute("srcset"),S.imagesToLoad[a].sizes||S.imagesToLoad[a].getAttribute("sizes"),!0,e)},S.autoplayTimeoutId=void 0,S.autoplaying=!1,S.autoplayPaused=!1,S.startAutoplay=function(){return"undefined"==typeof S.autoplayTimeoutId&&(!!S.params.autoplay&&(!S.autoplaying&&(S.autoplaying=!0,S.emit("onAutoplayStart",S),void o())))},S.stopAutoplay=function(e){S.autoplayTimeoutId&&(S.autoplayTimeoutId&&clearTimeout(S.autoplayTimeoutId),S.autoplaying=!1,S.autoplayTimeoutId=void 0,S.emit("onAutoplayStop",S))},S.pauseAutoplay=function(e){S.autoplayPaused||(S.autoplayTimeoutId&&clearTimeout(S.autoplayTimeoutId),S.autoplayPaused=!0,0===e?(S.autoplayPaused=!1,o()):S.wrapper.transitionEnd(function(){S&&(S.autoplayPaused=!1,S.autoplaying?o():S.stopAutoplay())}))},S.minTranslate=function(){return-S.snapGrid[0]},S.maxTranslate=function(){return-S.snapGrid[S.snapGrid.length-1]},S.updateAutoHeight=function(){var e=[],a=0;if("auto"!==S.params.slidesPerView&&S.params.slidesPerView>1)for(r=0;r<Math.ceil(S.params.slidesPerView);r++){var t=S.activeIndex+r;if(t>S.slides.length)break;e.push(S.slides.eq(t)[0])}else e.push(S.slides.eq(S.activeIndex)[0]);for(r=0;r<e.length;r++)if("undefined"!=typeof e[r]){var s=e[r].offsetHeight;a=s>a?s:a}a&&S.wrapper.css("height",a+"px")},S.updateContainerSize=function(){var e,a;e="undefined"!=typeof S.params.width?S.params.width:S.container[0].clientWidth,a="undefined"!=typeof S.params.height?S.params.height:S.container[0].clientHeight,0===e&&S.isHorizontal()||0===a&&!S.isHorizontal()||(e=e-parseInt(S.container.css("padding-left"),10)-parseInt(S.container.css("padding-right"),10),a=a-parseInt(S.container.css("padding-top"),10)-parseInt(S.container.css("padding-bottom"),10),S.width=e,S.height=a,S.size=S.isHorizontal()?S.width:S.height)},S.updateSlidesSize=function(){S.slides=S.wrapper.children("."+S.params.slideClass),S.snapGrid=[],S.slidesGrid=[],S.slidesSizesGrid=[];var e,a=S.params.spaceBetween,t=-S.params.slidesOffsetBefore,s=0,i=0;if("undefined"!=typeof S.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*S.size),S.virtualSize=-a,S.rtl?S.slides.css({marginLeft:"",marginTop:""}):S.slides.css({marginRight:"",marginBottom:""});var r;S.params.slidesPerColumn>1&&(r=Math.floor(S.slides.length/S.params.slidesPerColumn)===S.slides.length/S.params.slidesPerColumn?S.slides.length:Math.ceil(S.slides.length/S.params.slidesPerColumn)*S.params.slidesPerColumn,"auto"!==S.params.slidesPerView&&"row"===S.params.slidesPerColumnFill&&(r=Math.max(r,S.params.slidesPerView*S.params.slidesPerColumn)));var o,l=S.params.slidesPerColumn,p=r/l,d=p-(S.params.slidesPerColumn*p-S.slides.length);for(e=0;e<S.slides.length;e++){o=0;var u=S.slides.eq(e);if(S.params.slidesPerColumn>1){var c,m,h;"column"===S.params.slidesPerColumnFill?(m=Math.floor(e/l),h=e-m*l,(m>d||m===d&&h===l-1)&&++h>=l&&(h=0,m++),c=m+h*r/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(h=Math.floor(e/p),m=e-h*p),u.css("margin-"+(S.isHorizontal()?"top":"left"),0!==h&&S.params.spaceBetween&&S.params.spaceBetween+"px").attr("data-swiper-column",m).attr("data-swiper-row",h)}"none"!==u.css("display")&&("auto"===S.params.slidesPerView?(o=S.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),S.params.roundLengths&&(o=n(o))):(o=(S.size-(S.params.slidesPerView-1)*a)/S.params.slidesPerView,S.params.roundLengths&&(o=n(o)),S.isHorizontal()?S.slides[e].style.width=o+"px":S.slides[e].style.height=o+"px"),S.slides[e].swiperSlideSize=o,S.slidesSizesGrid.push(o),S.params.centeredSlides?(t=t+o/2+s/2+a,0===e&&(t=t-S.size/2-a),Math.abs(t)<.001&&(t=0),i%S.params.slidesPerGroup===0&&S.snapGrid.push(t),S.slidesGrid.push(t)):(i%S.params.slidesPerGroup===0&&S.snapGrid.push(t),S.slidesGrid.push(t),t=t+o+a),S.virtualSize+=o+a,s=o,i++)}S.virtualSize=Math.max(S.virtualSize,S.size)+S.params.slidesOffsetAfter;var g;if(S.rtl&&S.wrongRTL&&("slide"===S.params.effect||"coverflow"===S.params.effect)&&S.wrapper.css({width:S.virtualSize+S.params.spaceBetween+"px"}),S.support.flexbox&&!S.params.setWrapperSize||(S.isHorizontal()?S.wrapper.css({width:S.virtualSize+S.params.spaceBetween+"px"}):S.wrapper.css({height:S.virtualSize+S.params.spaceBetween+"px"})),S.params.slidesPerColumn>1&&(S.virtualSize=(o+S.params.spaceBetween)*r,S.virtualSize=Math.ceil(S.virtualSize/S.params.slidesPerColumn)-S.params.spaceBetween,S.isHorizontal()?S.wrapper.css({width:S.virtualSize+S.params.spaceBetween+"px"}):S.wrapper.css({height:S.virtualSize+S.params.spaceBetween+"px"}),S.params.centeredSlides)){for(g=[],e=0;e<S.snapGrid.length;e++)S.snapGrid[e]<S.virtualSize+S.snapGrid[0]&&g.push(S.snapGrid[e]);S.snapGrid=g}if(!S.params.centeredSlides){for(g=[],e=0;e<S.snapGrid.length;e++)S.snapGrid[e]<=S.virtualSize-S.size&&g.push(S.snapGrid[e]);S.snapGrid=g,Math.floor(S.virtualSize-S.size)-Math.floor(S.snapGrid[S.snapGrid.length-1])>1&&S.snapGrid.push(S.virtualSize-S.size)}0===S.snapGrid.length&&(S.snapGrid=[0]),0!==S.params.spaceBetween&&(S.isHorizontal()?S.rtl?S.slides.css({marginLeft:a+"px"}):S.slides.css({marginRight:a+"px"}):S.slides.css({marginBottom:a+"px"})),S.params.watchSlidesProgress&&S.updateSlidesOffset()}},S.updateSlidesOffset=function(){for(var e=0;e<S.slides.length;e++)S.slides[e].swiperSlideOffset=S.isHorizontal()?S.slides[e].offsetLeft:S.slides[e].offsetTop},S.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=S.translate||0),0!==S.slides.length){"undefined"==typeof S.slides[0].swiperSlideOffset&&S.updateSlidesOffset();var a=-e;S.rtl&&(a=e),S.slides.removeClass(S.params.slideVisibleClass);for(var t=0;t<S.slides.length;t++){var s=S.slides[t],i=(a+(S.params.centeredSlides?S.minTranslate():0)-s.swiperSlideOffset)/(s.swiperSlideSize+S.params.spaceBetween);if(S.params.watchSlidesVisibility){var r=-(a-s.swiperSlideOffset),n=r+S.slidesSizesGrid[t],o=r>=0&&r<S.size||n>0&&n<=S.size||r<=0&&n>=S.size;o&&S.slides.eq(t).addClass(S.params.slideVisibleClass)}s.progress=S.rtl?-i:i}}},S.updateProgress=function(e){"undefined"==typeof e&&(e=S.translate||0);var a=S.maxTranslate()-S.minTranslate(),t=S.isBeginning,s=S.isEnd;0===a?(S.progress=0,S.isBeginning=S.isEnd=!0):(S.progress=(e-S.minTranslate())/a,S.isBeginning=S.progress<=0,S.isEnd=S.progress>=1),S.isBeginning&&!t&&S.emit("onReachBeginning",S),S.isEnd&&!s&&S.emit("onReachEnd",S),S.params.watchSlidesProgress&&S.updateSlidesProgress(e),S.emit("onProgress",S,S.progress)},S.updateActiveIndex=function(){var e,a,t,s=S.rtl?S.translate:-S.translate;for(a=0;a<S.slidesGrid.length;a++)"undefined"!=typeof S.slidesGrid[a+1]?s>=S.slidesGrid[a]&&s<S.slidesGrid[a+1]-(S.slidesGrid[a+1]-S.slidesGrid[a])/2?e=a:s>=S.slidesGrid[a]&&s<S.slidesGrid[a+1]&&(e=a+1):s>=S.slidesGrid[a]&&(e=a);S.params.normalizeSlideIndex&&(e<0||"undefined"==typeof e)&&(e=0),t=Math.floor(e/S.params.slidesPerGroup),t>=S.snapGrid.length&&(t=S.snapGrid.length-1),e!==S.activeIndex&&(S.snapIndex=t,S.previousIndex=S.activeIndex,S.activeIndex=e,S.updateClasses(),S.updateRealIndex())},S.updateRealIndex=function(){S.realIndex=S.slides.eq(S.activeIndex).attr("data-swiper-slide-index")||S.activeIndex},S.updateClasses=function(){S.slides.removeClass(S.params.slideActiveClass+" "+S.params.slideNextClass+" "+S.params.slidePrevClass+" "+S.params.slideDuplicateActiveClass+" "+S.params.slideDuplicateNextClass+" "+S.params.slideDuplicatePrevClass);var e=S.slides.eq(S.activeIndex);e.addClass(S.params.slideActiveClass),i.loop&&(e.hasClass(S.params.slideDuplicateClass)?S.wrapper.children("."+S.params.slideClass+":not(."+S.params.slideDuplicateClass+')[data-swiper-slide-index="'+S.realIndex+'"]').addClass(S.params.slideDuplicateActiveClass):S.wrapper.children("."+S.params.slideClass+"."+S.params.slideDuplicateClass+'[data-swiper-slide-index="'+S.realIndex+'"]').addClass(S.params.slideDuplicateActiveClass));var t=e.next("."+S.params.slideClass).addClass(S.params.slideNextClass);S.params.loop&&0===t.length&&(t=S.slides.eq(0),t.addClass(S.params.slideNextClass));var s=e.prev("."+S.params.slideClass).addClass(S.params.slidePrevClass);if(S.params.loop&&0===s.length&&(s=S.slides.eq(-1),s.addClass(S.params.slidePrevClass)),i.loop&&(t.hasClass(S.params.slideDuplicateClass)?S.wrapper.children("."+S.params.slideClass+":not(."+S.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(S.params.slideDuplicateNextClass):S.wrapper.children("."+S.params.slideClass+"."+S.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(S.params.slideDuplicateNextClass),s.hasClass(S.params.slideDuplicateClass)?S.wrapper.children("."+S.params.slideClass+":not(."+S.params.slideDuplicateClass+')[data-swiper-slide-index="'+s.attr("data-swiper-slide-index")+'"]').addClass(S.params.slideDuplicatePrevClass):S.wrapper.children("."+S.params.slideClass+"."+S.params.slideDuplicateClass+'[data-swiper-slide-index="'+s.attr("data-swiper-slide-index")+'"]').addClass(S.params.slideDuplicatePrevClass)),S.paginationContainer&&S.paginationContainer.length>0){var r,n=S.params.loop?Math.ceil((S.slides.length-2*S.loopedSlides)/S.params.slidesPerGroup):S.snapGrid.length;if(S.params.loop?(r=Math.ceil((S.activeIndex-S.loopedSlides)/S.params.slidesPerGroup),r>S.slides.length-1-2*S.loopedSlides&&(r-=S.slides.length-2*S.loopedSlides),r>n-1&&(r-=n),r<0&&"bullets"!==S.params.paginationType&&(r=n+r)):r="undefined"!=typeof S.snapIndex?S.snapIndex:S.activeIndex||0,"bullets"===S.params.paginationType&&S.bullets&&S.bullets.length>0&&(S.bullets.removeClass(S.params.bulletActiveClass),S.paginationContainer.length>1?S.bullets.each(function(){a(this).index()===r&&a(this).addClass(S.params.bulletActiveClass)}):S.bullets.eq(r).addClass(S.params.bulletActiveClass)),"fraction"===S.params.paginationType&&(S.paginationContainer.find("."+S.params.paginationCurrentClass).text(r+1),S.paginationContainer.find("."+S.params.paginationTotalClass).text(n)),"progress"===S.params.paginationType){var o=(r+1)/n,l=o,p=1;S.isHorizontal()||(p=o,l=1),S.paginationContainer.find("."+S.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+l+") scaleY("+p+")").transition(S.params.speed)}"custom"===S.params.paginationType&&S.params.paginationCustomRender&&(S.paginationContainer.html(S.params.paginationCustomRender(S,r+1,n)),S.emit("onPaginationRendered",S,S.paginationContainer[0]))}S.params.loop||(S.params.prevButton&&S.prevButton&&S.prevButton.length>0&&(S.isBeginning?(S.prevButton.addClass(S.params.buttonDisabledClass),S.params.a11y&&S.a11y&&S.a11y.disable(S.prevButton)):(S.prevButton.removeClass(S.params.buttonDisabledClass),S.params.a11y&&S.a11y&&S.a11y.enable(S.prevButton))),S.params.nextButton&&S.nextButton&&S.nextButton.length>0&&(S.isEnd?(S.nextButton.addClass(S.params.buttonDisabledClass),S.params.a11y&&S.a11y&&S.a11y.disable(S.nextButton)):(S.nextButton.removeClass(S.params.buttonDisabledClass),S.params.a11y&&S.a11y&&S.a11y.enable(S.nextButton))))},S.updatePagination=function(){if(S.params.pagination&&S.paginationContainer&&S.paginationContainer.length>0){var e="";if("bullets"===S.params.paginationType){for(var a=S.params.loop?Math.ceil((S.slides.length-2*S.loopedSlides)/S.params.slidesPerGroup):S.snapGrid.length,t=0;t<a;t++)e+=S.params.paginationBulletRender?S.params.paginationBulletRender(S,t,S.params.bulletClass):"<"+S.params.paginationElement+' class="'+S.params.bulletClass+'"></'+S.params.paginationElement+">";S.paginationContainer.html(e),S.bullets=S.paginationContainer.find("."+S.params.bulletClass),S.params.paginationClickable&&S.params.a11y&&S.a11y&&S.a11y.initPagination()}"fraction"===S.params.paginationType&&(e=S.params.paginationFractionRender?S.params.paginationFractionRender(S,S.params.paginationCurrentClass,S.params.paginationTotalClass):'<span class="'+S.params.paginationCurrentClass+'"></span> / <span class="'+S.params.paginationTotalClass+'"></span>',S.paginationContainer.html(e)),"progress"===S.params.paginationType&&(e=S.params.paginationProgressRender?S.params.paginationProgressRender(S,S.params.paginationProgressbarClass):'<span class="'+S.params.paginationProgressbarClass+'"></span>',S.paginationContainer.html(e)),"custom"!==S.params.paginationType&&S.emit("onPaginationRendered",S,S.paginationContainer[0])}},S.update=function(e){function a(){S.rtl?-S.translate:S.translate;s=Math.min(Math.max(S.translate,S.maxTranslate()),S.minTranslate()),S.setWrapperTranslate(s),S.updateActiveIndex(),S.updateClasses()}if(S.updateContainerSize(),S.updateSlidesSize(),S.updateProgress(),S.updatePagination(),S.updateClasses(),S.params.scrollbar&&S.scrollbar&&S.scrollbar.set(),e){var t,s;S.controller&&S.controller.spline&&(S.controller.spline=void 0),S.params.freeMode?(a(),S.params.autoHeight&&S.updateAutoHeight()):(t=("auto"===S.params.slidesPerView||S.params.slidesPerView>1)&&S.isEnd&&!S.params.centeredSlides?S.slideTo(S.slides.length-1,0,!1,!0):S.slideTo(S.activeIndex,0,!1,!0),t||a())}else S.params.autoHeight&&S.updateAutoHeight()},S.onResize=function(e){S.params.breakpoints&&S.setBreakpoint();var a=S.params.allowSwipeToPrev,t=S.params.allowSwipeToNext;S.params.allowSwipeToPrev=S.params.allowSwipeToNext=!0,S.updateContainerSize(),S.updateSlidesSize(),("auto"===S.params.slidesPerView||S.params.freeMode||e)&&S.updatePagination(),S.params.scrollbar&&S.scrollbar&&S.scrollbar.set(),S.controller&&S.controller.spline&&(S.controller.spline=void 0);var s=!1;if(S.params.freeMode){var i=Math.min(Math.max(S.translate,S.maxTranslate()),S.minTranslate());S.setWrapperTranslate(i),S.updateActiveIndex(),S.updateClasses(),S.params.autoHeight&&S.updateAutoHeight()}else S.updateClasses(),s=("auto"===S.params.slidesPerView||S.params.slidesPerView>1)&&S.isEnd&&!S.params.centeredSlides?S.slideTo(S.slides.length-1,0,!1,!0):S.slideTo(S.activeIndex,0,!1,!0);S.params.lazyLoading&&!s&&S.lazy&&S.lazy.load(),S.params.allowSwipeToPrev=a,S.params.allowSwipeToNext=t},S.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?S.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(S.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),S.touchEvents={start:S.support.touch||!S.params.simulateTouch?"touchstart":S.touchEventsDesktop.start,move:S.support.touch||!S.params.simulateTouch?"touchmove":S.touchEventsDesktop.move,end:S.support.touch||!S.params.simulateTouch?"touchend":S.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===S.params.touchEventsTarget?S.container:S.wrapper).addClass("swiper-wp8-"+S.params.direction),S.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",s="container"===S.params.touchEventsTarget?S.container[0]:S.wrapper[0],r=S.support.touch?s:document,n=!!S.params.nested;if(S.browser.ie)s[t](S.touchEvents.start,S.onTouchStart,!1),r[t](S.touchEvents.move,S.onTouchMove,n),r[t](S.touchEvents.end,S.onTouchEnd,!1);else{if(S.support.touch){var o=!("touchstart"!==S.touchEvents.start||!S.support.passiveListener||!S.params.passiveListeners)&&{passive:!0,capture:!1};s[t](S.touchEvents.start,S.onTouchStart,o),s[t](S.touchEvents.move,S.onTouchMove,n),s[t](S.touchEvents.end,S.onTouchEnd,o)}(i.simulateTouch&&!S.device.ios&&!S.device.android||i.simulateTouch&&!S.support.touch&&S.device.ios)&&(s[t]("mousedown",S.onTouchStart,!1),document[t]("mousemove",S.onTouchMove,n),document[t]("mouseup",S.onTouchEnd,!1))}window[t]("resize",S.onResize),S.params.nextButton&&S.nextButton&&S.nextButton.length>0&&(S.nextButton[a]("click",S.onClickNext),S.params.a11y&&S.a11y&&S.nextButton[a]("keydown",S.a11y.onEnterKey)),S.params.prevButton&&S.prevButton&&S.prevButton.length>0&&(S.prevButton[a]("click",S.onClickPrev),S.params.a11y&&S.a11y&&S.prevButton[a]("keydown",S.a11y.onEnterKey)),S.params.pagination&&S.params.paginationClickable&&(S.paginationContainer[a]("click","."+S.params.bulletClass,S.onClickIndex),S.params.a11y&&S.a11y&&S.paginationContainer[a]("keydown","."+S.params.bulletClass,S.a11y.onEnterKey)),(S.params.preventClicks||S.params.preventClicksPropagation)&&s[t]("click",S.preventClicks,!0)},S.attachEvents=function(){S.initEvents()},S.detachEvents=function(){S.initEvents(!0)},S.allowClick=!0,S.preventClicks=function(e){S.allowClick||(S.params.preventClicks&&e.preventDefault(),S.params.preventClicksPropagation&&S.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},S.onClickNext=function(e){e.preventDefault(),S.isEnd&&!S.params.loop||S.slideNext()},S.onClickPrev=function(e){e.preventDefault(),S.isBeginning&&!S.params.loop||S.slidePrev()},S.onClickIndex=function(e){
e.preventDefault();var t=a(this).index()*S.params.slidesPerGroup;S.params.loop&&(t+=S.loopedSlides),S.slideTo(t)},S.updateClickedSlide=function(e){var t=l(e,"."+S.params.slideClass),s=!1;if(t)for(var i=0;i<S.slides.length;i++)S.slides[i]===t&&(s=!0);if(!t||!s)return S.clickedSlide=void 0,void(S.clickedIndex=void 0);if(S.clickedSlide=t,S.clickedIndex=a(t).index(),S.params.slideToClickedSlide&&void 0!==S.clickedIndex&&S.clickedIndex!==S.activeIndex){var r,n=S.clickedIndex;if(S.params.loop){if(S.animating)return;r=a(S.clickedSlide).attr("data-swiper-slide-index"),S.params.centeredSlides?n<S.loopedSlides-S.params.slidesPerView/2||n>S.slides.length-S.loopedSlides+S.params.slidesPerView/2?(S.fixLoop(),n=S.wrapper.children("."+S.params.slideClass+'[data-swiper-slide-index="'+r+'"]:not(.'+S.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){S.slideTo(n)},0)):S.slideTo(n):n>S.slides.length-S.params.slidesPerView?(S.fixLoop(),n=S.wrapper.children("."+S.params.slideClass+'[data-swiper-slide-index="'+r+'"]:not(.'+S.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){S.slideTo(n)},0)):S.slideTo(n)}else S.slideTo(n)}};var z,M,E,P,I,k,L,D,B,H,G="input, select, textarea, button, video",X=Date.now(),Y=[];S.animating=!1,S.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var A,O;S.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),A="touchstart"===e.type,A||!("which"in e)||3!==e.which){if(S.params.noSwiping&&l(e,"."+S.params.noSwipingClass))return void(S.allowClick=!0);if(!S.params.swipeHandler||l(e,S.params.swipeHandler)){var t=S.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s=S.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(S.device.ios&&S.params.iOSEdgeSwipeDetection&&t<=S.params.iOSEdgeSwipeThreshold)){if(z=!0,M=!1,E=!0,I=void 0,O=void 0,S.touches.startX=t,S.touches.startY=s,P=Date.now(),S.allowClick=!0,S.updateContainerSize(),S.swipeDirection=void 0,S.params.threshold>0&&(D=!1),"touchstart"!==e.type){var i=!0;a(e.target).is(G)&&(i=!1),document.activeElement&&a(document.activeElement).is(G)&&document.activeElement.blur(),i&&e.preventDefault()}S.emit("onTouchStart",S,e)}}}},S.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!A||"mousemove"!==e.type){if(e.preventedByNestedSwiper)return S.touches.startX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,void(S.touches.startY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY);if(S.params.onlyExternal)return S.allowClick=!1,void(z&&(S.touches.startX=S.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,S.touches.startY=S.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,P=Date.now()));if(A&&S.params.touchReleaseOnEdges&&!S.params.loop)if(S.isHorizontal()){if(S.touches.currentX<S.touches.startX&&S.translate<=S.maxTranslate()||S.touches.currentX>S.touches.startX&&S.translate>=S.minTranslate())return}else if(S.touches.currentY<S.touches.startY&&S.translate<=S.maxTranslate()||S.touches.currentY>S.touches.startY&&S.translate>=S.minTranslate())return;if(A&&document.activeElement&&e.target===document.activeElement&&a(e.target).is(G))return M=!0,void(S.allowClick=!1);if(E&&S.emit("onTouchMove",S,e),!(e.targetTouches&&e.targetTouches.length>1)){if(S.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,S.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof I){var t;S.isHorizontal()&&S.touches.currentY===S.touches.startY||!S.isHorizontal()&&S.touches.currentX!==S.touches.startX?I=!1:(t=180*Math.atan2(Math.abs(S.touches.currentY-S.touches.startY),Math.abs(S.touches.currentX-S.touches.startX))/Math.PI,I=S.isHorizontal()?t>S.params.touchAngle:90-t>S.params.touchAngle)}if(I&&S.emit("onTouchMoveOpposite",S,e),"undefined"==typeof O&&S.browser.ieTouch&&(S.touches.currentX===S.touches.startX&&S.touches.currentY===S.touches.startY||(O=!0)),z){if(I)return void(z=!1);if(O||!S.browser.ieTouch){S.allowClick=!1,S.emit("onSliderMove",S,e),e.preventDefault(),S.params.touchMoveStopPropagation&&!S.params.nested&&e.stopPropagation(),M||(i.loop&&S.fixLoop(),L=S.getWrapperTranslate(),S.setWrapperTransition(0),S.animating&&S.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),S.params.autoplay&&S.autoplaying&&(S.params.autoplayDisableOnInteraction?S.stopAutoplay():S.pauseAutoplay()),H=!1,!S.params.grabCursor||S.params.allowSwipeToNext!==!0&&S.params.allowSwipeToPrev!==!0||S.setGrabCursor(!0)),M=!0;var s=S.touches.diff=S.isHorizontal()?S.touches.currentX-S.touches.startX:S.touches.currentY-S.touches.startY;s*=S.params.touchRatio,S.rtl&&(s=-s),S.swipeDirection=s>0?"prev":"next",k=s+L;var r=!0;if(s>0&&k>S.minTranslate()?(r=!1,S.params.resistance&&(k=S.minTranslate()-1+Math.pow(-S.minTranslate()+L+s,S.params.resistanceRatio))):s<0&&k<S.maxTranslate()&&(r=!1,S.params.resistance&&(k=S.maxTranslate()+1-Math.pow(S.maxTranslate()-L-s,S.params.resistanceRatio))),r&&(e.preventedByNestedSwiper=!0),!S.params.allowSwipeToNext&&"next"===S.swipeDirection&&k<L&&(k=L),!S.params.allowSwipeToPrev&&"prev"===S.swipeDirection&&k>L&&(k=L),S.params.threshold>0){if(!(Math.abs(s)>S.params.threshold||D))return void(k=L);if(!D)return D=!0,S.touches.startX=S.touches.currentX,S.touches.startY=S.touches.currentY,k=L,void(S.touches.diff=S.isHorizontal()?S.touches.currentX-S.touches.startX:S.touches.currentY-S.touches.startY)}S.params.followFinger&&((S.params.freeMode||S.params.watchSlidesProgress)&&S.updateActiveIndex(),S.params.freeMode&&(0===Y.length&&Y.push({position:S.touches[S.isHorizontal()?"startX":"startY"],time:P}),Y.push({position:S.touches[S.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),S.updateProgress(k),S.setWrapperTranslate(k))}}}}},S.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),E&&S.emit("onTouchEnd",S,e),E=!1,z){S.params.grabCursor&&M&&z&&(S.params.allowSwipeToNext===!0||S.params.allowSwipeToPrev===!0)&&S.setGrabCursor(!1);var t=Date.now(),s=t-P;if(S.allowClick&&(S.updateClickedSlide(e),S.emit("onTap",S,e),s<300&&t-X>300&&(B&&clearTimeout(B),B=setTimeout(function(){S&&(S.params.paginationHide&&S.paginationContainer.length>0&&!a(e.target).hasClass(S.params.bulletClass)&&S.paginationContainer.toggleClass(S.params.paginationHiddenClass),S.emit("onClick",S,e))},300)),s<300&&t-X<300&&(B&&clearTimeout(B),S.emit("onDoubleTap",S,e))),X=Date.now(),setTimeout(function(){S&&(S.allowClick=!0)},0),!z||!M||!S.swipeDirection||0===S.touches.diff||k===L)return void(z=M=!1);z=M=!1;var i;if(i=S.params.followFinger?S.rtl?S.translate:-S.translate:-k,S.params.freeMode){if(i<-S.minTranslate())return void S.slideTo(S.activeIndex);if(i>-S.maxTranslate())return void(S.slides.length<S.snapGrid.length?S.slideTo(S.snapGrid.length-1):S.slideTo(S.slides.length-1));if(S.params.freeModeMomentum){if(Y.length>1){var r=Y.pop(),n=Y.pop(),o=r.position-n.position,l=r.time-n.time;S.velocity=o/l,S.velocity=S.velocity/2,Math.abs(S.velocity)<S.params.freeModeMinimumVelocity&&(S.velocity=0),(l>150||(new window.Date).getTime()-r.time>300)&&(S.velocity=0)}else S.velocity=0;S.velocity=S.velocity*S.params.freeModeMomentumVelocityRatio,Y.length=0;var p=1e3*S.params.freeModeMomentumRatio,d=S.velocity*p,u=S.translate+d;S.rtl&&(u=-u);var c,m=!1,h=20*Math.abs(S.velocity)*S.params.freeModeMomentumBounceRatio;if(u<S.maxTranslate())S.params.freeModeMomentumBounce?(u+S.maxTranslate()<-h&&(u=S.maxTranslate()-h),c=S.maxTranslate(),m=!0,H=!0):u=S.maxTranslate();else if(u>S.minTranslate())S.params.freeModeMomentumBounce?(u-S.minTranslate()>h&&(u=S.minTranslate()+h),c=S.minTranslate(),m=!0,H=!0):u=S.minTranslate();else if(S.params.freeModeSticky){var g,f=0;for(f=0;f<S.snapGrid.length;f+=1)if(S.snapGrid[f]>-u){g=f;break}u=Math.abs(S.snapGrid[g]-u)<Math.abs(S.snapGrid[g-1]-u)||"next"===S.swipeDirection?S.snapGrid[g]:S.snapGrid[g-1],S.rtl||(u=-u)}if(0!==S.velocity)p=S.rtl?Math.abs((-u-S.translate)/S.velocity):Math.abs((u-S.translate)/S.velocity);else if(S.params.freeModeSticky)return void S.slideReset();S.params.freeModeMomentumBounce&&m?(S.updateProgress(c),S.setWrapperTransition(p),S.setWrapperTranslate(u),S.onTransitionStart(),S.animating=!0,S.wrapper.transitionEnd(function(){S&&H&&(S.emit("onMomentumBounce",S),S.setWrapperTransition(S.params.speed),S.setWrapperTranslate(c),S.wrapper.transitionEnd(function(){S&&S.onTransitionEnd()}))})):S.velocity?(S.updateProgress(u),S.setWrapperTransition(p),S.setWrapperTranslate(u),S.onTransitionStart(),S.animating||(S.animating=!0,S.wrapper.transitionEnd(function(){S&&S.onTransitionEnd()}))):S.updateProgress(u),S.updateActiveIndex()}return void((!S.params.freeModeMomentum||s>=S.params.longSwipesMs)&&(S.updateProgress(),S.updateActiveIndex()))}var v,w=0,y=S.slidesSizesGrid[0];for(v=0;v<S.slidesGrid.length;v+=S.params.slidesPerGroup)"undefined"!=typeof S.slidesGrid[v+S.params.slidesPerGroup]?i>=S.slidesGrid[v]&&i<S.slidesGrid[v+S.params.slidesPerGroup]&&(w=v,y=S.slidesGrid[v+S.params.slidesPerGroup]-S.slidesGrid[v]):i>=S.slidesGrid[v]&&(w=v,y=S.slidesGrid[S.slidesGrid.length-1]-S.slidesGrid[S.slidesGrid.length-2]);var x=(i-S.slidesGrid[w])/y;if(s>S.params.longSwipesMs){if(!S.params.longSwipes)return void S.slideTo(S.activeIndex);"next"===S.swipeDirection&&(x>=S.params.longSwipesRatio?S.slideTo(w+S.params.slidesPerGroup):S.slideTo(w)),"prev"===S.swipeDirection&&(x>1-S.params.longSwipesRatio?S.slideTo(w+S.params.slidesPerGroup):S.slideTo(w))}else{if(!S.params.shortSwipes)return void S.slideTo(S.activeIndex);"next"===S.swipeDirection&&S.slideTo(w+S.params.slidesPerGroup),"prev"===S.swipeDirection&&S.slideTo(w)}}},S._slideTo=function(e,a){return S.slideTo(e,a,!0,!0)},S.slideTo=function(e,a,t,s){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),e<0&&(e=0),S.snapIndex=Math.floor(e/S.params.slidesPerGroup),S.snapIndex>=S.snapGrid.length&&(S.snapIndex=S.snapGrid.length-1);var i=-S.snapGrid[S.snapIndex];if(S.params.autoplay&&S.autoplaying&&(s||!S.params.autoplayDisableOnInteraction?S.pauseAutoplay(a):S.stopAutoplay()),S.updateProgress(i),S.params.normalizeSlideIndex)for(var r=0;r<S.slidesGrid.length;r++)-Math.floor(100*i)>=Math.floor(100*S.slidesGrid[r])&&(e=r);return!(!S.params.allowSwipeToNext&&i<S.translate&&i<S.minTranslate())&&(!(!S.params.allowSwipeToPrev&&i>S.translate&&i>S.maxTranslate()&&(S.activeIndex||0)!==e)&&("undefined"==typeof a&&(a=S.params.speed),S.previousIndex=S.activeIndex||0,S.activeIndex=e,S.updateRealIndex(),S.rtl&&-i===S.translate||!S.rtl&&i===S.translate?(S.params.autoHeight&&S.updateAutoHeight(),S.updateClasses(),"slide"!==S.params.effect&&S.setWrapperTranslate(i),!1):(S.updateClasses(),S.onTransitionStart(t),0===a||S.browser.lteIE9?(S.setWrapperTranslate(i),S.setWrapperTransition(0),S.onTransitionEnd(t)):(S.setWrapperTranslate(i),S.setWrapperTransition(a),S.animating||(S.animating=!0,S.wrapper.transitionEnd(function(){S&&S.onTransitionEnd(t)}))),!0)))},S.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),S.params.autoHeight&&S.updateAutoHeight(),S.lazy&&S.lazy.onTransitionStart(),e&&(S.emit("onTransitionStart",S),S.activeIndex!==S.previousIndex&&(S.emit("onSlideChangeStart",S),S.activeIndex>S.previousIndex?S.emit("onSlideNextStart",S):S.emit("onSlidePrevStart",S)))},S.onTransitionEnd=function(e){S.animating=!1,S.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),S.lazy&&S.lazy.onTransitionEnd(),e&&(S.emit("onTransitionEnd",S),S.activeIndex!==S.previousIndex&&(S.emit("onSlideChangeEnd",S),S.activeIndex>S.previousIndex?S.emit("onSlideNextEnd",S):S.emit("onSlidePrevEnd",S))),S.params.history&&S.history&&S.history.setHistory(S.params.history,S.activeIndex),S.params.hashnav&&S.hashnav&&S.hashnav.setHash()},S.slideNext=function(e,a,t){if(S.params.loop){if(S.animating)return!1;S.fixLoop();S.container[0].clientLeft;return S.slideTo(S.activeIndex+S.params.slidesPerGroup,a,e,t)}return S.slideTo(S.activeIndex+S.params.slidesPerGroup,a,e,t)},S._slideNext=function(e){return S.slideNext(!0,e,!0)},S.slidePrev=function(e,a,t){if(S.params.loop){if(S.animating)return!1;S.fixLoop();S.container[0].clientLeft;return S.slideTo(S.activeIndex-1,a,e,t)}return S.slideTo(S.activeIndex-1,a,e,t)},S._slidePrev=function(e){return S.slidePrev(!0,e,!0)},S.slideReset=function(e,a,t){return S.slideTo(S.activeIndex,a,e)},S.disableTouchControl=function(){return S.params.onlyExternal=!0,!0},S.enableTouchControl=function(){return S.params.onlyExternal=!1,!0},S.setWrapperTransition=function(e,a){S.wrapper.transition(e),"slide"!==S.params.effect&&S.effects[S.params.effect]&&S.effects[S.params.effect].setTransition(e),S.params.parallax&&S.parallax&&S.parallax.setTransition(e),S.params.scrollbar&&S.scrollbar&&S.scrollbar.setTransition(e),S.params.control&&S.controller&&S.controller.setTransition(e,a),S.emit("onSetTransition",S,e)},S.setWrapperTranslate=function(e,a,t){var s=0,i=0,r=0;S.isHorizontal()?s=S.rtl?-e:e:i=e,S.params.roundLengths&&(s=n(s),i=n(i)),S.params.virtualTranslate||(S.support.transforms3d?S.wrapper.transform("translate3d("+s+"px, "+i+"px, "+r+"px)"):S.wrapper.transform("translate("+s+"px, "+i+"px)")),S.translate=S.isHorizontal()?s:i;var o,l=S.maxTranslate()-S.minTranslate();o=0===l?0:(e-S.minTranslate())/l,o!==S.progress&&S.updateProgress(e),a&&S.updateActiveIndex(),"slide"!==S.params.effect&&S.effects[S.params.effect]&&S.effects[S.params.effect].setTranslate(S.translate),S.params.parallax&&S.parallax&&S.parallax.setTranslate(S.translate),S.params.scrollbar&&S.scrollbar&&S.scrollbar.setTranslate(S.translate),S.params.control&&S.controller&&S.controller.setTranslate(S.translate,t),S.emit("onSetTranslate",S,S.translate)},S.getTranslate=function(e,a){var t,s,i,r;return"undefined"==typeof a&&(a="x"),S.params.virtualTranslate?S.rtl?-S.translate:S.translate:(i=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=i.transform||i.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),r=new window.WebKitCSSMatrix("none"===s?"":s)):(r=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=r.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?r.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?r.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),S.rtl&&s&&(s=-s),s||0)},S.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=S.isHorizontal()?"x":"y"),S.getTranslate(S.wrapper[0],e)},S.observers=[],S.initObservers=function(){if(S.params.observeParents)for(var e=S.container.parents(),a=0;a<e.length;a++)p(e[a]);p(S.container[0],{childList:!1}),p(S.wrapper[0],{attributes:!1})},S.disconnectObservers=function(){for(var e=0;e<S.observers.length;e++)S.observers[e].disconnect();S.observers=[]},S.createLoop=function(){S.wrapper.children("."+S.params.slideClass+"."+S.params.slideDuplicateClass).remove();var e=S.wrapper.children("."+S.params.slideClass);"auto"!==S.params.slidesPerView||S.params.loopedSlides||(S.params.loopedSlides=e.length),S.loopedSlides=parseInt(S.params.loopedSlides||S.params.slidesPerView,10),S.loopedSlides=S.loopedSlides+S.params.loopAdditionalSlides,S.loopedSlides>e.length&&(S.loopedSlides=e.length);var t,s=[],i=[];for(e.each(function(t,r){var n=a(this);t<S.loopedSlides&&i.push(r),t<e.length&&t>=e.length-S.loopedSlides&&s.push(r),n.attr("data-swiper-slide-index",t)}),t=0;t<i.length;t++)S.wrapper.append(a(i[t].cloneNode(!0)).addClass(S.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)S.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(S.params.slideDuplicateClass))},S.destroyLoop=function(){S.wrapper.children("."+S.params.slideClass+"."+S.params.slideDuplicateClass).remove(),S.slides.removeAttr("data-swiper-slide-index")},S.reLoop=function(e){var a=S.activeIndex-S.loopedSlides;S.destroyLoop(),S.createLoop(),S.updateSlidesSize(),e&&S.slideTo(a+S.loopedSlides,0,!1)},S.fixLoop=function(){var e;S.activeIndex<S.loopedSlides?(e=S.slides.length-3*S.loopedSlides+S.activeIndex,e+=S.loopedSlides,S.slideTo(e,0,!1,!0)):("auto"===S.params.slidesPerView&&S.activeIndex>=2*S.loopedSlides||S.activeIndex>S.slides.length-2*S.params.slidesPerView)&&(e=-S.slides.length+S.activeIndex+S.loopedSlides,e+=S.loopedSlides,S.slideTo(e,0,!1,!0))},S.appendSlide=function(e){if(S.params.loop&&S.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&S.wrapper.append(e[a]);else S.wrapper.append(e);S.params.loop&&S.createLoop(),S.params.observer&&S.support.observer||S.update(!0)},S.prependSlide=function(e){S.params.loop&&S.destroyLoop();var a=S.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&S.wrapper.prepend(e[t]);a=S.activeIndex+e.length}else S.wrapper.prepend(e);S.params.loop&&S.createLoop(),S.params.observer&&S.support.observer||S.update(!0),S.slideTo(a,0,!1)},S.removeSlide=function(e){S.params.loop&&(S.destroyLoop(),S.slides=S.wrapper.children("."+S.params.slideClass));var a,t=S.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],S.slides[a]&&S.slides.eq(a).remove(),a<t&&t--;t=Math.max(t,0)}else a=e,S.slides[a]&&S.slides.eq(a).remove(),a<t&&t--,t=Math.max(t,0);S.params.loop&&S.createLoop(),S.params.observer&&S.support.observer||S.update(!0),S.params.loop?S.slideTo(t+S.loopedSlides,0,!1):S.slideTo(t,0,!1)},S.removeAllSlides=function(){for(var e=[],a=0;a<S.slides.length;a++)e.push(a);S.removeSlide(e)},S.effects={fade:{setTranslate:function(){for(var e=0;e<S.slides.length;e++){var a=S.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;S.params.virtualTranslate||(s-=S.translate);var i=0;S.isHorizontal()||(i=s,s=0);var r=S.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:r}).transform("translate3d("+s+"px, "+i+"px, 0px)")}},setTransition:function(e){if(S.slides.transition(e),S.params.virtualTranslate&&0!==e){var a=!1;S.slides.transitionEnd(function(){if(!a&&S){a=!0,S.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)S.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var e=0;e<S.slides.length;e++){var t=S.slides.eq(e),s=t[0].progress;S.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var i=t[0].swiperSlideOffset,r=-180*s,n=r,o=0,l=-i,p=0;if(S.isHorizontal()?S.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+S.slides.length,S.params.flip.slideShadows){var d=S.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=S.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=a('<div class="swiper-slide-shadow-'+(S.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=a('<div class="swiper-slide-shadow-'+(S.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-s,0)),u.length&&(u[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){if(S.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),S.params.virtualTranslate&&0!==e){var t=!1;S.slides.eq(S.activeIndex).transitionEnd(function(){if(!t&&S&&a(this).hasClass(S.params.slideActiveClass)){t=!0,S.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<e.length;s++)S.wrapper.trigger(e[s])}})}}},cube:{setTranslate:function(){var e,t=0;S.params.cube.shadow&&(S.isHorizontal()?(e=S.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),S.wrapper.append(e)),e.css({height:S.width+"px"})):(e=S.container.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),S.container.append(e))));for(var s=0;s<S.slides.length;s++){var i=S.slides.eq(s),r=90*s,n=Math.floor(r/360);S.rtl&&(r=-r,n=Math.floor(-r/360));var o=Math.max(Math.min(i[0].progress,1),-1),l=0,p=0,d=0;s%4===0?(l=4*-n*S.size,d=0):(s-1)%4===0?(l=0,d=4*-n*S.size):(s-2)%4===0?(l=S.size+4*n*S.size,d=S.size):(s-3)%4===0&&(l=-S.size,d=3*S.size+4*S.size*n),S.rtl&&(l=-l),S.isHorizontal()||(p=l,l=0);var u="rotateX("+(S.isHorizontal()?0:-r)+"deg) rotateY("+(S.isHorizontal()?r:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(o<=1&&o>-1&&(t=90*s+90*o,S.rtl&&(t=90*-s-90*o)),i.transform(u),S.params.cube.slideShadows){var c=S.isHorizontal()?i.find(".swiper-slide-shadow-left"):i.find(".swiper-slide-shadow-top"),m=S.isHorizontal()?i.find(".swiper-slide-shadow-right"):i.find(".swiper-slide-shadow-bottom");0===c.length&&(c=a('<div class="swiper-slide-shadow-'+(S.isHorizontal()?"left":"top")+'"></div>'),i.append(c)),0===m.length&&(m=a('<div class="swiper-slide-shadow-'+(S.isHorizontal()?"right":"bottom")+'"></div>'),i.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(S.wrapper.css({"-webkit-transform-origin":"50% 50% -"+S.size/2+"px","-moz-transform-origin":"50% 50% -"+S.size/2+"px","-ms-transform-origin":"50% 50% -"+S.size/2+"px","transform-origin":"50% 50% -"+S.size/2+"px"}),S.params.cube.shadow)if(S.isHorizontal())e.transform("translate3d(0px, "+(S.width/2+S.params.cube.shadowOffset)+"px, "+-S.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+S.params.cube.shadowScale+")");else{var h=Math.abs(t)-90*Math.floor(Math.abs(t)/90),g=1.5-(Math.sin(2*h*Math.PI/360)/2+Math.cos(2*h*Math.PI/360)/2),f=S.params.cube.shadowScale,v=S.params.cube.shadowScale/g,w=S.params.cube.shadowOffset;e.transform("scale3d("+f+", 1, "+v+") translate3d(0px, "+(S.height/2+w)+"px, "+-S.height/2/v+"px) rotateX(-90deg)")}var y=S.isSafari||S.isUiWebView?-S.size/2:0;S.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(S.isHorizontal()?0:t)+"deg) rotateY("+(S.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){S.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),S.params.cube.shadow&&!S.isHorizontal()&&S.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=S.translate,t=S.isHorizontal()?-e+S.width/2:-e+S.height/2,s=S.isHorizontal()?S.params.coverflow.rotate:-S.params.coverflow.rotate,i=S.params.coverflow.depth,r=0,n=S.slides.length;r<n;r++){var o=S.slides.eq(r),l=S.slidesSizesGrid[r],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*S.params.coverflow.modifier,u=S.isHorizontal()?s*d:0,c=S.isHorizontal()?0:s*d,m=-i*Math.abs(d),h=S.isHorizontal()?0:S.params.coverflow.stretch*d,g=S.isHorizontal()?S.params.coverflow.stretch*d:0;Math.abs(g)<.001&&(g=0),Math.abs(h)<.001&&(h=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var f="translate3d("+g+"px,"+h+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(f),o[0].style.zIndex=-Math.abs(Math.round(d))+1,S.params.coverflow.slideShadows){var v=S.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=S.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=a('<div class="swiper-slide-shadow-'+(S.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=a('<div class="swiper-slide-shadow-'+(S.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(S.browser.ie){var y=S.wrapper[0].style;y.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){S.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},S.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if("undefined"!=typeof e&&("undefined"==typeof t&&(t=!0),0!==S.slides.length)){var s=S.slides.eq(e),i=s.find("."+S.params.lazyLoadingClass+":not(."+S.params.lazyStatusLoadedClass+"):not(."+S.params.lazyStatusLoadingClass+")");!s.hasClass(S.params.lazyLoadingClass)||s.hasClass(S.params.lazyStatusLoadedClass)||s.hasClass(S.params.lazyStatusLoadingClass)||(i=i.add(s[0])),0!==i.length&&i.each(function(){var e=a(this);e.addClass(S.params.lazyStatusLoadingClass);var i=e.attr("data-background"),r=e.attr("data-src"),n=e.attr("data-srcset"),o=e.attr("data-sizes");S.loadImage(e[0],r||i,n,o,!1,function(){if(i?(e.css("background-image",'url("'+i+'")'),e.removeAttr("data-background")):(n&&(e.attr("srcset",n),e.removeAttr("data-srcset")),o&&(e.attr("sizes",o),e.removeAttr("data-sizes")),r&&(e.attr("src",r),e.removeAttr("data-src"))),e.addClass(S.params.lazyStatusLoadedClass).removeClass(S.params.lazyStatusLoadingClass),s.find("."+S.params.lazyPreloaderClass+", ."+S.params.preloaderClass).remove(),S.params.loop&&t){var a=s.attr("data-swiper-slide-index");if(s.hasClass(S.params.slideDuplicateClass)){var l=S.wrapper.children('[data-swiper-slide-index="'+a+'"]:not(.'+S.params.slideDuplicateClass+")");S.lazy.loadImageInSlide(l.index(),!1)}else{var p=S.wrapper.children("."+S.params.slideDuplicateClass+'[data-swiper-slide-index="'+a+'"]');S.lazy.loadImageInSlide(p.index(),!1)}}S.emit("onLazyImageReady",S,s[0],e[0])}),S.emit("onLazyImageLoad",S,s[0],e[0])})}},load:function(){var e,t=S.params.slidesPerView;if("auto"===t&&(t=0),S.lazy.initialImageLoaded||(S.lazy.initialImageLoaded=!0),S.params.watchSlidesVisibility)S.wrapper.children("."+S.params.slideVisibleClass).each(function(){S.lazy.loadImageInSlide(a(this).index())});else if(t>1)for(e=S.activeIndex;e<S.activeIndex+t;e++)S.slides[e]&&S.lazy.loadImageInSlide(e);else S.lazy.loadImageInSlide(S.activeIndex);if(S.params.lazyLoadingInPrevNext)if(t>1||S.params.lazyLoadingInPrevNextAmount&&S.params.lazyLoadingInPrevNextAmount>1){var s=S.params.lazyLoadingInPrevNextAmount,i=t,r=Math.min(S.activeIndex+i+Math.max(s,i),S.slides.length),n=Math.max(S.activeIndex-Math.max(i,s),0);for(e=S.activeIndex+t;e<r;e++)S.slides[e]&&S.lazy.loadImageInSlide(e);for(e=n;e<S.activeIndex;e++)S.slides[e]&&S.lazy.loadImageInSlide(e)}else{var o=S.wrapper.children("."+S.params.slideNextClass);o.length>0&&S.lazy.loadImageInSlide(o.index());var l=S.wrapper.children("."+S.params.slidePrevClass);l.length>0&&S.lazy.loadImageInSlide(l.index())}},onTransitionStart:function(){S.params.lazyLoading&&(S.params.lazyLoadingOnTransitionStart||!S.params.lazyLoadingOnTransitionStart&&!S.lazy.initialImageLoaded)&&S.lazy.load()},onTransitionEnd:function(){S.params.lazyLoading&&!S.params.lazyLoadingOnTransitionStart&&S.lazy.load()}},S.scrollbar={isTouched:!1,setDragPosition:function(e){var a=S.scrollbar,t=S.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[S.isHorizontal()?"left":"top"]-a.dragSize/2,i=-S.minTranslate()*a.moveDivider,r=-S.maxTranslate()*a.moveDivider;s<i?s=i:s>r&&(s=r),s=-s/a.moveDivider,S.updateProgress(s),S.setWrapperTranslate(s,!0)},dragStart:function(e){var a=S.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),S.params.scrollbarHide&&a.track.css("opacity",1),S.wrapper.transition(100),a.drag.transition(100),S.emit("onScrollbarDragStart",S)},dragMove:function(e){var a=S.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),S.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),S.emit("onScrollbarDragMove",S))},dragEnd:function(e){var a=S.scrollbar;a.isTouched&&(a.isTouched=!1,S.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),S.emit("onScrollbarDragEnd",S),S.params.scrollbarSnapOnRelease&&S.slideReset())},draggableEvents:function(){return S.params.simulateTouch!==!1||S.support.touch?S.touchEvents:S.touchEventsDesktop}(),enableDraggable:function(){var e=S.scrollbar,t=S.support.touch?e.track:document;a(e.track).on(e.draggableEvents.start,e.dragStart),a(t).on(e.draggableEvents.move,e.dragMove),a(t).on(e.draggableEvents.end,e.dragEnd)},disableDraggable:function(){var e=S.scrollbar,t=S.support.touch?e.track:document;a(e.track).off(S.draggableEvents.start,e.dragStart),a(t).off(S.draggableEvents.move,e.dragMove),a(t).off(S.draggableEvents.end,e.dragEnd)},set:function(){if(S.params.scrollbar){var e=S.scrollbar;e.track=a(S.params.scrollbar),S.params.uniqueNavElements&&"string"==typeof S.params.scrollbar&&e.track.length>1&&1===S.container.find(S.params.scrollbar).length&&(e.track=S.container.find(S.params.scrollbar)),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=a('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=S.isHorizontal()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=S.size/S.virtualSize,e.moveDivider=e.divider*(e.trackSize/S.size),e.dragSize=e.trackSize*e.divider,S.isHorizontal()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",S.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(S.params.scrollbar){var e,a=S.scrollbar,t=(S.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*S.progress,S.rtl&&S.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):e<0?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),S.isHorizontal()?(S.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(S.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),S.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){S.params.scrollbar&&S.scrollbar.drag.transition(e)}},S.controller={LinearSpline:function(e,a){this.x=e,this.y=a,this.lastIndex=e.length-1;var t,s;this.x.length;this.interpolate=function(e){return e?(s=i(this.x,e),t=s-1,(e-this.x[t])*(this.y[s]-this.y[t])/(this.x[s]-this.x[t])+this.y[t]):0};var i=function(){var e,a,t;return function(s,i){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=i?a=t:e=t;return e}}()},getInterpolateFunction:function(e){S.controller.spline||(S.controller.spline=S.params.loop?new S.controller.LinearSpline(S.slidesGrid,e.slidesGrid):new S.controller.LinearSpline(S.snapGrid,e.snapGrid))},setTranslate:function(e,a){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-S.translate:S.translate,"slide"===S.params.controlBy&&(S.controller.getInterpolateFunction(a),r=-S.controller.spline.interpolate(-e)),r&&"container"!==S.params.controlBy||(i=(a.maxTranslate()-a.minTranslate())/(S.maxTranslate()-S.minTranslate()),r=(e-S.minTranslate())*i+a.minTranslate()),S.params.controlInverse&&(r=a.maxTranslate()-r),a.updateProgress(r),a.setWrapperTranslate(r,!1,S),a.updateActiveIndex()}var i,r,n=S.params.control;if(S.isArray(n))for(var o=0;o<n.length;o++)n[o]!==a&&n[o]instanceof t&&s(n[o]);else n instanceof t&&a!==n&&s(n)},setTransition:function(e,a){function s(a){a.setWrapperTransition(e,S),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){r&&(a.params.loop&&"slide"===S.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var i,r=S.params.control;if(S.isArray(r))for(i=0;i<r.length;i++)r[i]!==a&&r[i]instanceof t&&s(r[i]);else r instanceof t&&a!==r&&s(r)}},S.hashnav={onHashCange:function(e,a){var t=document.location.hash.replace("#",""),s=S.slides.eq(S.activeIndex).attr("data-hash");t!==s&&S.slideTo(S.wrapper.children("."+S.params.slideClass+'[data-hash="'+t+'"]').index());
},attachEvents:function(e){var t=e?"off":"on";a(window)[t]("hashchange",S.hashnav.onHashCange)},setHash:function(){if(S.hashnav.initialized&&S.params.hashnav)if(S.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+S.slides.eq(S.activeIndex).attr("data-hash")||"");else{var e=S.slides.eq(S.activeIndex),a=e.attr("data-hash")||e.attr("data-history");document.location.hash=a||""}},init:function(){if(S.params.hashnav&&!S.params.history){S.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e){for(var a=0,t=0,s=S.slides.length;t<s;t++){var i=S.slides.eq(t),r=i.attr("data-hash")||i.attr("data-history");if(r===e&&!i.hasClass(S.params.slideDuplicateClass)){var n=i.index();S.slideTo(n,a,S.params.runCallbacksOnInit,!0)}}S.params.hashnavWatchState&&S.hashnav.attachEvents()}}},destroy:function(){S.params.hashnavWatchState&&S.hashnav.attachEvents(!0)}},S.history={init:function(){if(S.params.history){if(!window.history||!window.history.pushState)return S.params.history=!1,void(S.params.hashnav=!0);S.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,S.params.runCallbacksOnInit),S.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){S.history.paths=S.history.getPathValues(),S.history.scrollToSlide(S.params.speed,S.history.paths.value,!1)},getPathValues:function(){var e=window.location.pathname.slice(1).split("/"),a=e.length,t=e[a-2],s=e[a-1];return{key:t,value:s}},setHistory:function(e,a){if(S.history.initialized&&S.params.history){var t=S.slides.eq(a),s=this.slugify(t.attr("data-history"));window.location.pathname.includes(e)||(s=e+"/"+s),S.params.replaceState?window.history.replaceState(null,null,s):window.history.pushState(null,null,s)}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,a,t){if(a)for(var s=0,i=S.slides.length;s<i;s++){var r=S.slides.eq(s),n=this.slugify(r.attr("data-history"));if(n===a&&!r.hasClass(S.params.slideDuplicateClass)){var o=r.index();S.slideTo(o,e,t)}}else S.slideTo(0,e,t)}},S.disableKeyboardControl=function(){S.params.keyboardControl=!1,a(document).off("keydown",d)},S.enableKeyboardControl=function(){S.params.keyboardControl=!0,a(document).on("keydown",d)},S.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},S.params.mousewheelControl&&(S.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":u()?"wheel":"mousewheel"),S.disableMousewheelControl=function(){if(!S.mousewheel.event)return!1;var e=S.container;return"container"!==S.params.mousewheelEventsTarged&&(e=a(S.params.mousewheelEventsTarged)),e.off(S.mousewheel.event,c),!0},S.enableMousewheelControl=function(){if(!S.mousewheel.event)return!1;var e=S.container;return"container"!==S.params.mousewheelEventsTarged&&(e=a(S.params.mousewheelEventsTarged)),e.on(S.mousewheel.event,c),!0},S.parallax={setTranslate:function(){S.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){h(this,S.progress)}),S.slides.each(function(){var e=a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);h(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=S.params.speed),S.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=a(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(s=0),t.transition(s)})}},S.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:S.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var a=e.targetTouches[0].pageX,t=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY,r=Math.sqrt(Math.pow(s-a,2)+Math.pow(i-t,2));return r},onGestureStart:function(e){var t=S.zoom;if(!S.support.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(e)}return t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=a(this),0===t.gesture.slide.length&&(t.gesture.slide=S.slides.eq(S.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+S.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||S.params.zoomMax,0!==t.gesture.imageWrap.length)?(t.gesture.image.transition(0),void(t.isScaling=!0)):void(t.gesture.image=void 0)},onGestureChange:function(e){var a=S.zoom;if(!S.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleMove=a.getDistanceBetweenTouches(e)}a.gesture.image&&0!==a.gesture.image.length&&(S.support.gestures?a.scale=e.scale*a.currentScale:a.scale=a.gesture.scaleMove/a.gesture.scaleStart*a.currentScale,a.scale>a.gesture.zoomMax&&(a.scale=a.gesture.zoomMax-1+Math.pow(a.scale-a.gesture.zoomMax+1,.5)),a.scale<S.params.zoomMin&&(a.scale=S.params.zoomMin+1-Math.pow(S.params.zoomMin-a.scale+1,.5)),a.gesture.image.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var a=S.zoom;!S.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||a.gesture.image&&0!==a.gesture.image.length&&(a.scale=Math.max(Math.min(a.scale,a.gesture.zoomMax),S.params.zoomMin),a.gesture.image.transition(S.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(a.gesture.slide=void 0))},onTouchStart:function(e,a){var t=e.zoom;t.gesture.image&&0!==t.gesture.image.length&&(t.image.isTouched||("android"===e.device.os&&a.preventDefault(),t.image.isTouched=!0,t.image.touchesStart.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,t.image.touchesStart.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY))},onTouchMove:function(e){var a=S.zoom;if(a.gesture.image&&0!==a.gesture.image.length&&(S.allowClick=!1,a.image.isTouched&&a.gesture.slide)){a.image.isMoved||(a.image.width=a.gesture.image[0].offsetWidth,a.image.height=a.gesture.image[0].offsetHeight,a.image.startX=S.getTranslate(a.gesture.imageWrap[0],"x")||0,a.image.startY=S.getTranslate(a.gesture.imageWrap[0],"y")||0,a.gesture.slideWidth=a.gesture.slide[0].offsetWidth,a.gesture.slideHeight=a.gesture.slide[0].offsetHeight,a.gesture.imageWrap.transition(0));var t=a.image.width*a.scale,s=a.image.height*a.scale;if(!(t<a.gesture.slideWidth&&s<a.gesture.slideHeight)){if(a.image.minX=Math.min(a.gesture.slideWidth/2-t/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-s/2,0),a.image.maxY=-a.image.minY,a.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,a.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!a.image.isMoved&&!a.isScaling){if(S.isHorizontal()&&Math.floor(a.image.minX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x<a.image.touchesStart.x||Math.floor(a.image.maxX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x>a.image.touchesStart.x)return void(a.image.isTouched=!1);if(!S.isHorizontal()&&Math.floor(a.image.minY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y<a.image.touchesStart.y||Math.floor(a.image.maxY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y>a.image.touchesStart.y)return void(a.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),a.image.isMoved=!0,a.image.currentX=a.image.touchesCurrent.x-a.image.touchesStart.x+a.image.startX,a.image.currentY=a.image.touchesCurrent.y-a.image.touchesStart.y+a.image.startY,a.image.currentX<a.image.minX&&(a.image.currentX=a.image.minX+1-Math.pow(a.image.minX-a.image.currentX+1,.8)),a.image.currentX>a.image.maxX&&(a.image.currentX=a.image.maxX-1+Math.pow(a.image.currentX-a.image.maxX+1,.8)),a.image.currentY<a.image.minY&&(a.image.currentY=a.image.minY+1-Math.pow(a.image.minY-a.image.currentY+1,.8)),a.image.currentY>a.image.maxY&&(a.image.currentY=a.image.maxY-1+Math.pow(a.image.currentY-a.image.maxY+1,.8)),a.velocity.prevPositionX||(a.velocity.prevPositionX=a.image.touchesCurrent.x),a.velocity.prevPositionY||(a.velocity.prevPositionY=a.image.touchesCurrent.y),a.velocity.prevTime||(a.velocity.prevTime=Date.now()),a.velocity.x=(a.image.touchesCurrent.x-a.velocity.prevPositionX)/(Date.now()-a.velocity.prevTime)/2,a.velocity.y=(a.image.touchesCurrent.y-a.velocity.prevPositionY)/(Date.now()-a.velocity.prevTime)/2,Math.abs(a.image.touchesCurrent.x-a.velocity.prevPositionX)<2&&(a.velocity.x=0),Math.abs(a.image.touchesCurrent.y-a.velocity.prevPositionY)<2&&(a.velocity.y=0),a.velocity.prevPositionX=a.image.touchesCurrent.x,a.velocity.prevPositionY=a.image.touchesCurrent.y,a.velocity.prevTime=Date.now(),a.gesture.imageWrap.transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)")}}},onTouchEnd:function(e,a){var t=e.zoom;if(t.gesture.image&&0!==t.gesture.image.length){if(!t.image.isTouched||!t.image.isMoved)return t.image.isTouched=!1,void(t.image.isMoved=!1);t.image.isTouched=!1,t.image.isMoved=!1;var s=300,i=300,r=t.velocity.x*s,n=t.image.currentX+r,o=t.velocity.y*i,l=t.image.currentY+o;0!==t.velocity.x&&(s=Math.abs((n-t.image.currentX)/t.velocity.x)),0!==t.velocity.y&&(i=Math.abs((l-t.image.currentY)/t.velocity.y));var p=Math.max(s,i);t.image.currentX=n,t.image.currentY=l;var d=t.image.width*t.scale,u=t.image.height*t.scale;t.image.minX=Math.min(t.gesture.slideWidth/2-d/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-u/2,0),t.image.maxY=-t.image.minY,t.image.currentX=Math.max(Math.min(t.image.currentX,t.image.maxX),t.image.minX),t.image.currentY=Math.max(Math.min(t.image.currentY,t.image.maxY),t.image.minY),t.gesture.imageWrap.transition(p).transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}},onTransitionEnd:function(e){var a=e.zoom;a.gesture.slide&&e.previousIndex!==e.activeIndex&&(a.gesture.image.transform("translate3d(0,0,0) scale(1)"),a.gesture.imageWrap.transform("translate3d(0,0,0)"),a.gesture.slide=a.gesture.image=a.gesture.imageWrap=void 0,a.scale=a.currentScale=1)},toggleZoom:function(e,t){var s=e.zoom;if(s.gesture.slide||(s.gesture.slide=e.clickedSlide?a(e.clickedSlide):e.slides.eq(e.activeIndex),s.gesture.image=s.gesture.slide.find("img, svg, canvas"),s.gesture.imageWrap=s.gesture.image.parent("."+e.params.zoomContainerClass)),s.gesture.image&&0!==s.gesture.image.length){var i,r,n,o,l,p,d,u,c,m,h,g,f,v,w,y,x,T;"undefined"==typeof s.image.touchesStart.x&&t?(i="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,r="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(i=s.image.touchesStart.x,r=s.image.touchesStart.y),s.scale&&1!==s.scale?(s.scale=s.currentScale=1,s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),s.gesture.slide=void 0):(s.scale=s.currentScale=s.gesture.imageWrap.attr("data-swiper-zoom")||e.params.zoomMax,t?(x=s.gesture.slide[0].offsetWidth,T=s.gesture.slide[0].offsetHeight,n=s.gesture.slide.offset().left,o=s.gesture.slide.offset().top,l=n+x/2-i,p=o+T/2-r,c=s.gesture.image[0].offsetWidth,m=s.gesture.image[0].offsetHeight,h=c*s.scale,g=m*s.scale,f=Math.min(x/2-h/2,0),v=Math.min(T/2-g/2,0),w=-f,y=-v,d=l*s.scale,u=p*s.scale,d<f&&(d=f),d>w&&(d=w),u<v&&(u=v),u>y&&(u=y)):(d=0,u=0),s.gesture.imageWrap.transition(300).transform("translate3d("+d+"px, "+u+"px,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+s.scale+")"))}},attachEvents:function(e){var t=e?"off":"on";if(S.params.zoom){var s=(S.slides,!("touchstart"!==S.touchEvents.start||!S.support.passiveListener||!S.params.passiveListeners)&&{passive:!0,capture:!1});S.support.gestures?(S.slides[t]("gesturestart",S.zoom.onGestureStart,s),S.slides[t]("gesturechange",S.zoom.onGestureChange,s),S.slides[t]("gestureend",S.zoom.onGestureEnd,s)):"touchstart"===S.touchEvents.start&&(S.slides[t](S.touchEvents.start,S.zoom.onGestureStart,s),S.slides[t](S.touchEvents.move,S.zoom.onGestureChange,s),S.slides[t](S.touchEvents.end,S.zoom.onGestureEnd,s)),S[t]("touchStart",S.zoom.onTouchStart),S.slides.each(function(e,s){a(s).find("."+S.params.zoomContainerClass).length>0&&a(s)[t](S.touchEvents.move,S.zoom.onTouchMove)}),S[t]("touchEnd",S.zoom.onTouchEnd),S[t]("transitionEnd",S.zoom.onTransitionEnd),S.params.zoomToggle&&S.on("doubleTap",S.zoom.toggleZoom)}},init:function(){S.zoom.attachEvents()},destroy:function(){S.zoom.attachEvents(!0)}},S._plugins=[];for(var N in S.plugins){var W=S.plugins[N](S,S.params[N]);W&&S._plugins.push(W)}return S.callPlugins=function(e){for(var a=0;a<S._plugins.length;a++)e in S._plugins[a]&&S._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},S.emitterEventListeners={},S.emit=function(e){S.params[e]&&S.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(S.emitterEventListeners[e])for(a=0;a<S.emitterEventListeners[e].length;a++)S.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);S.callPlugins&&S.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},S.on=function(e,a){return e=g(e),S.emitterEventListeners[e]||(S.emitterEventListeners[e]=[]),S.emitterEventListeners[e].push(a),S},S.off=function(e,a){var t;if(e=g(e),"undefined"==typeof a)return S.emitterEventListeners[e]=[],S;if(S.emitterEventListeners[e]&&0!==S.emitterEventListeners[e].length){for(t=0;t<S.emitterEventListeners[e].length;t++)S.emitterEventListeners[e][t]===a&&S.emitterEventListeners[e].splice(t,1);return S}},S.once=function(e,a){e=g(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),S.off(e,t)};return S.on(e,t),S},S.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(a(e.target).is(S.params.nextButton)?(S.onClickNext(e),S.isEnd?S.a11y.notify(S.params.lastSlideMessage):S.a11y.notify(S.params.nextSlideMessage)):a(e.target).is(S.params.prevButton)&&(S.onClickPrev(e),S.isBeginning?S.a11y.notify(S.params.firstSlideMessage):S.a11y.notify(S.params.prevSlideMessage)),a(e.target).is("."+S.params.bulletClass)&&a(e.target)[0].click())},liveRegion:a('<span class="'+S.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=S.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){S.params.nextButton&&S.nextButton&&S.nextButton.length>0&&(S.a11y.makeFocusable(S.nextButton),S.a11y.addRole(S.nextButton,"button"),S.a11y.addLabel(S.nextButton,S.params.nextSlideMessage)),S.params.prevButton&&S.prevButton&&S.prevButton.length>0&&(S.a11y.makeFocusable(S.prevButton),S.a11y.addRole(S.prevButton,"button"),S.a11y.addLabel(S.prevButton,S.params.prevSlideMessage)),a(S.container).append(S.a11y.liveRegion)},initPagination:function(){S.params.pagination&&S.params.paginationClickable&&S.bullets&&S.bullets.length&&S.bullets.each(function(){var e=a(this);S.a11y.makeFocusable(e),S.a11y.addRole(e,"button"),S.a11y.addLabel(e,S.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){S.a11y.liveRegion&&S.a11y.liveRegion.length>0&&S.a11y.liveRegion.remove()}},S.init=function(){S.params.loop&&S.createLoop(),S.updateContainerSize(),S.updateSlidesSize(),S.updatePagination(),S.params.scrollbar&&S.scrollbar&&(S.scrollbar.set(),S.params.scrollbarDraggable&&S.scrollbar.enableDraggable()),"slide"!==S.params.effect&&S.effects[S.params.effect]&&(S.params.loop||S.updateProgress(),S.effects[S.params.effect].setTranslate()),S.params.loop?S.slideTo(S.params.initialSlide+S.loopedSlides,0,S.params.runCallbacksOnInit):(S.slideTo(S.params.initialSlide,0,S.params.runCallbacksOnInit),0===S.params.initialSlide&&(S.parallax&&S.params.parallax&&S.parallax.setTranslate(),S.lazy&&S.params.lazyLoading&&(S.lazy.load(),S.lazy.initialImageLoaded=!0))),S.attachEvents(),S.params.observer&&S.support.observer&&S.initObservers(),S.params.preloadImages&&!S.params.lazyLoading&&S.preloadImages(),S.params.zoom&&S.zoom&&S.zoom.init(),S.params.autoplay&&S.startAutoplay(),S.params.keyboardControl&&S.enableKeyboardControl&&S.enableKeyboardControl(),S.params.mousewheelControl&&S.enableMousewheelControl&&S.enableMousewheelControl(),S.params.hashnavReplaceState&&(S.params.replaceState=S.params.hashnavReplaceState),S.params.history&&S.history&&S.history.init(),S.params.hashnav&&S.hashnav&&S.hashnav.init(),S.params.a11y&&S.a11y&&S.a11y.init(),S.emit("onInit",S)},S.cleanupStyles=function(){S.container.removeClass(S.classNames.join(" ")).removeAttr("style"),S.wrapper.removeAttr("style"),S.slides&&S.slides.length&&S.slides.removeClass([S.params.slideVisibleClass,S.params.slideActiveClass,S.params.slideNextClass,S.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),S.paginationContainer&&S.paginationContainer.length&&S.paginationContainer.removeClass(S.params.paginationHiddenClass),S.bullets&&S.bullets.length&&S.bullets.removeClass(S.params.bulletActiveClass),S.params.prevButton&&a(S.params.prevButton).removeClass(S.params.buttonDisabledClass),S.params.nextButton&&a(S.params.nextButton).removeClass(S.params.buttonDisabledClass),S.params.scrollbar&&S.scrollbar&&(S.scrollbar.track&&S.scrollbar.track.length&&S.scrollbar.track.removeAttr("style"),S.scrollbar.drag&&S.scrollbar.drag.length&&S.scrollbar.drag.removeAttr("style"))},S.destroy=function(e,a){S.detachEvents(),S.stopAutoplay(),S.params.scrollbar&&S.scrollbar&&S.params.scrollbarDraggable&&S.scrollbar.disableDraggable(),S.params.loop&&S.destroyLoop(),a&&S.cleanupStyles(),S.disconnectObservers(),S.params.zoom&&S.zoom&&S.zoom.destroy(),S.params.keyboardControl&&S.disableKeyboardControl&&S.disableKeyboardControl(),S.params.mousewheelControl&&S.disableMousewheelControl&&S.disableMousewheelControl(),S.params.a11y&&S.a11y&&S.a11y.destroy(),S.params.history&&!S.params.replaceState&&window.removeEventListener("popstate",S.history.setHistoryPopState),S.params.hashnav&&S.hashnav&&S.hashnav.destroy(),S.emit("onDestroy"),e!==!1&&(S=null)},S.init(),S}};t.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var e=document.createElement("div");return e.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length}()},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),i=!t&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:t||i||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}(),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,a)}catch(e){}return e}(),gestures:function(){return"ongesturestart"in window}()},plugins:{}};for(var s=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var s=[],i=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var r,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),0!==o.indexOf("<td")&&0!==o.indexOf("<th")||(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,i=0;i<n.childNodes.length;i++)s.push(n.childNodes[i])}else for(r=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],i=0;i<r.length;i++)r[i]&&s.push(r[i])}else if(a.nodeType||a===window||a===document)s.push(a);else if(a.length>0&&a[0].nodeType)for(i=0;i<a.length;i++)s.push(a[i]);return new e(s)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.remove(a[t]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var s in e)this[t][s]=e[s],this[t].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e);return this},data:function(e,a){if("undefined"!=typeof a){for(var t=0;t<this.length;t++){var s=this[t];s.dom7ElementDataStorage||(s.dom7ElementDataStorage={}),s.dom7ElementDataStorage[e]=a}return this}if(this[0]){var i=this[0].getAttribute("data-"+e);return i?i:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,s,i){function r(e){var i=e.target;if(a(i).is(t))s.call(i,e);else for(var r=a(i).parents(),n=0;n<r.length;n++)a(r[n]).is(t)&&s.call(r[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(s=arguments[1],i=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],s,i);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:s,liveListener:r}),this[n].addEventListener(l[o],r,i);return this},off:function(e,a,t,s){for(var i=e.split(" "),r=0;r<i.length;r++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],s=arguments[2]||!1),this[n].removeEventListener(i[r],t,s);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(i[r],this[n].dom7LiveListeners[o].liveListener,s);return this},once:function(e,a,t,s){function i(n){t(n),r.off(e,a,i,s)}var r=this;"function"==typeof a&&(a=!1,t=arguments[1],s=arguments[2]),r.on(e,a,i,s)},trigger:function(e,a){for(var t=0;t<this.length;t++){var s;try{s=new window.CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(t){s=document.createEvent("Event"),s.initEvent(e,!0,!0),s.detail=a}this[t].dispatchEvent(s)}return this},transitionEnd:function(e){function a(r){if(r.target===this)for(e.call(this,r),t=0;t<s.length;t++)i.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<s.length;t++)i.on(s[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,s=e.clientTop||t.clientTop||0,i=e.clientLeft||t.clientLeft||0,r=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+r-s,left:a.left+n-i}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var s in e)this[t].style[s]=e[s];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},text:function(e){if("undefined"==typeof e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a++)this[a].textContent=e;return this},is:function(t){if(!this[0])return!1;var s,i;if("string"==typeof t){var r=this[0];if(r===document)return t===document;if(r===window)return t===window;if(r.matches)return r.matches(t);if(r.webkitMatchesSelector)return r.webkitMatchesSelector(t);if(r.mozMatchesSelector)return r.mozMatchesSelector(t);if(r.msMatchesSelector)return r.msMatchesSelector(t);for(s=a(t),i=0;i<s.length;i++)if(s[i]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(s=t.nodeType?[t]:t,i=0;i<s.length;i++)if(s[i]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}},eq:function(a){if("undefined"==typeof a)return this;var t,s=this.length;return a>s-1?new e([]):a<0?(t=s+a,new e(t<0?[]:[this[t]])):new e([this[a]])},append:function(a){var t,s;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a;i.firstChild;)this[t].appendChild(i.firstChild)}else if(a instanceof e)for(s=0;s<a.length;s++)this[t].appendChild(a[s]);else this[t].appendChild(a);return this},prepend:function(a){var t,s;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a,s=i.childNodes.length-1;s>=0;s--)this[t].insertBefore(i.childNodes[s],this[t].childNodes[0])}else if(a instanceof e)for(s=0;s<a.length;s++)this[t].insertBefore(a[s],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),s=0;s<this.length;s++)if(1===t.length)t[0].parentNode.insertBefore(this[s],t[0]);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[s].cloneNode(!0),t[i])},insertAfter:function(e){for(var t=a(e),s=0;s<this.length;s++)if(1===t.length)t[0].parentNode.insertBefore(this[s],t[0].nextSibling);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[s].cloneNode(!0),t[i].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var s=[],i=this[0];if(!i)return new e([]);for(;i.nextElementSibling;){var r=i.nextElementSibling;t?a(r).is(t)&&s.push(r):s.push(r),i=r}return new e(s)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var s=[],i=this[0];if(!i)return new e([]);for(;i.previousElementSibling;){var r=i.previousElementSibling;t?a(r).is(t)&&s.push(r):s.push(r),i=r}return new e(s)},parent:function(e){for(var t=[],s=0;s<this.length;s++)e?a(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],s=0;s<this.length;s++)for(var i=this[s].parentNode;i;)e?a(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],s=0;s<this.length;s++)for(var i=this[s].querySelectorAll(a),r=0;r<i.length;r++)t.push(i[r]);return new e(t)},children:function(t){for(var s=[],i=0;i<this.length;i++)for(var r=this[i].childNodes,n=0;n<r.length;n++)t?1===r[n].nodeType&&a(r[n]).is(t)&&s.push(r[n]):1===r[n].nodeType&&s.push(r[n]);return new e(a.unique(s))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,s=this;for(e=0;e<arguments.length;e++){var i=a(arguments[e]);for(t=0;t<i.length;t++)s[s.length]=i[t],s.length++}return s}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)a.indexOf(e[t])===-1&&a.push(e[t]);return a},a}()),i=["jQuery","Zepto","Dom7"],r=0;r<i.length;r++)window[i[r]]&&e(window[i[r]]);var n;n="undefined"==typeof s?window.Dom7||window.Zepto||window.jQuery:s,n&&("transitionEnd"in n.fn||(n.fn.transitionEnd=function(e){function a(r){if(r.target===this)for(e.call(this,r),t=0;t<s.length;t++)i.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<s.length;t++)i.on(s[t],a);return this}),"transform"in n.fn||(n.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in n.fn||(n.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this}),"outerWidth"in n.fn||(n.fn.outerWidth=function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null})),window.Swiper=t}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
//# sourceMappingURL=maps/swiper.min.js.map

!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
    'use strict';

    // COLLAPSE PUBLIC CLASS DEFINITION
    // ================================

    var Collapse = function (element, options) {
        this.$element      = $(element)
        this.options       = $.extend({}, Collapse.DEFAULTS, options)
        this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
            '[data-toggle="collapse"][data-target="#' + element.id + '"]')
        this.transitioning = null

        if (this.options.parent) {
            this.$parent = this.getParent()
        } else {
            this.addAriaAndCollapsedClass(this.$element, this.$trigger)
        }

        if (this.options.toggle) this.toggle()
    }

    Collapse.VERSION  = '3.3.7'

    Collapse.TRANSITION_DURATION = 350

    Collapse.DEFAULTS = {
        toggle: true
    }

    Collapse.prototype.dimension = function () {
        var hasWidth = this.$element.hasClass('width')
        return hasWidth ? 'width' : 'height'
    }

    Collapse.prototype.show = function () {
        if (this.transitioning || this.$element.hasClass('in')) return

        var activesData
        var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

        if (actives && actives.length) {
            activesData = actives.data('bs.collapse')
            if (activesData && activesData.transitioning) return
        }

        var startEvent = $.Event('show.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented()) return

        if (actives && actives.length) {
            Plugin.call(actives, 'hide')
            activesData || actives.data('bs.collapse', null)
        }

        var dimension = this.dimension()

        this.$element
            .removeClass('collapse')
            .addClass('collapsing')[dimension](0)
            .attr('aria-expanded', true)

        this.$trigger
            .removeClass('collapsed')
            .attr('aria-expanded', true)

        this.transitioning = 1

        var complete = function () {
            this.$element
                .removeClass('collapsing')
                .addClass('collapse in')[dimension]('')
            this.transitioning = 0
            this.$element
                .trigger('shown.bs.collapse')
        }

        if (!$.support.transition) return complete.call(this)

        var scrollSize = $.camelCase(['scroll', dimension].join('-'))

        this.$element
            .one('bsTransitionEnd', $.proxy(complete, this))
            .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
    }

    Collapse.prototype.hide = function () {
        if (this.transitioning || !this.$element.hasClass('in')) return

        var startEvent = $.Event('hide.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented()) return

        var dimension = this.dimension()

        this.$element[dimension](this.$element[dimension]())[0].offsetHeight

        this.$element
            .addClass('collapsing')
            .removeClass('collapse in')
            .attr('aria-expanded', false)

        this.$trigger
            .addClass('collapsed')
            .attr('aria-expanded', false)

        this.transitioning = 1

        var complete = function () {
            this.transitioning = 0
            this.$element
                .removeClass('collapsing')
                .addClass('collapse')
                .trigger('hidden.bs.collapse')
        }

        if (!$.support.transition) return complete.call(this)

        this.$element
            [dimension](0)
            .one('bsTransitionEnd', $.proxy(complete, this))
            .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
    }

    Collapse.prototype.toggle = function () {
        this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

    Collapse.prototype.getParent = function () {
        return $(this.options.parent)
            .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
            .each($.proxy(function (i, element) {
                var $element = $(element)
                this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
            }, this))
            .end()
    }

    Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
        var isOpen = $element.hasClass('in')

        $element.attr('aria-expanded', isOpen)
        $trigger
            .toggleClass('collapsed', !isOpen)
            .attr('aria-expanded', isOpen)
    }

    function getTargetFromTrigger($trigger) {
        var href
        var target = $trigger.attr('data-target')
            || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

        return $(target)
    }


    // COLLAPSE PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function () {
            var $this   = $(this)
            var data    = $this.data('bs.collapse')
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

            if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
            if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.collapse

    $.fn.collapse             = Plugin
    $.fn.collapse.Constructor = Collapse


    // COLLAPSE NO CONFLICT
    // ====================

    $.fn.collapse.noConflict = function () {
        $.fn.collapse = old
        return this
    }


    // COLLAPSE DATA-API
    // =================

    $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
        var $this   = $(this)

        if (!$this.attr('data-target')) e.preventDefault()

        var $target = getTargetFromTrigger($this)
        var data    = $target.data('bs.collapse')
        var option  = data ? 'toggle' : $this.data()

        Plugin.call($target, option)
    })

}(jQuery);
/*!
 * headroom.js v0.9.3 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2016 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a,b){"use strict";"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.Headroom=b()}(this,function(){"use strict";function a(a){this.callback=a,this.ticking=!1}function b(a){return a&&"undefined"!=typeof window&&(a===window||a.nodeType)}function c(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var d,e,f=a||{};for(e=1;e<arguments.length;e++){var g=arguments[e]||{};for(d in g)"object"!=typeof f[d]||b(f[d])?f[d]=f[d]||g[d]:f[d]=c(f[d],g[d])}return f}function d(a){return a===Object(a)?a:{down:a,up:a}}function e(a,b){b=c(b,e.options),this.lastKnownScrollY=0,this.elem=a,this.tolerance=d(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop,this.onBottom=b.onBottom,this.onNotBottom=b.onNotBottom}var f={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,a.prototype={constructor:a,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},e.prototype={constructor:e,init:function(){return e.cutsTheMustard?(this.debouncer=new a(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.notTop,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;!a.contains(b.pinned)&&a.contains(b.unpinned)||(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.bottom)||(a.add(b.bottom),a.remove(b.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notBottom)||(a.add(b.notBottom),a.remove(b.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(a){return Math.max(a.offsetHeight,a.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var a=document.body,b=document.documentElement;return Math.max(a.scrollHeight,b.scrollHeight,a.offsetHeight,b.offsetHeight,a.clientHeight,b.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),a+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},e.options={tolerance:{up:0,down:0},offset:0,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},e.cutsTheMustard="undefined"!=typeof f&&f.rAF&&f.bind&&f.classList,e});
/*!
 * Color Thief v2.0
 * by Lokesh Dhakar - http://www.lokeshdhakar.com
 *
 * Thanks
 * ------
 * Nick Rabinowitz - For creating quantize.js.
 * John Schulz - For clean up and optimization. @JFSIII
 * Nathan Spady - For adding drag and drop support to the demo page.
 *
 * License
 * -------
 * Copyright 2011, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://raw.githubusercontent.com/lokesh/color-thief/master/LICENSE
 *
 */
var CanvasImage=function(a){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=a.width,this.height=this.canvas.height=a.height,this.context.drawImage(a,0,0,this.width,this.height)};CanvasImage.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},CanvasImage.prototype.update=function(a){this.context.putImageData(a,0,0)},CanvasImage.prototype.getPixelCount=function(){return this.width*this.height},CanvasImage.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},CanvasImage.prototype.removeCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)};var ColorThief=function(){};/*!
 * quantize.js Copyright 2008 Nick Rabinowitz.
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */
/*!
 * Block below copied from Protovis: http://mbostock.github.com/protovis/
 * Copyright 2010 Stanford Visualization Group
 * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
 */
if(ColorThief.prototype.getColor=function(a,b){var c=this.getPalette(a,5,b),d=c[0];return d},ColorThief.prototype.getPalette=function(a,b,c){"undefined"==typeof b&&(b=10),("undefined"==typeof c||1>c)&&(c=10);for(var d,e,f,g,h,i=new CanvasImage(a),j=i.getImageData(),k=j.data,l=i.getPixelCount(),m=[],n=0;l>n;n+=c)d=4*n,e=k[d+0],f=k[d+1],g=k[d+2],h=k[d+3],h>=125&&(e>250&&f>250&&g>250||m.push([e,f,g]));var o=MMCQ.quantize(m,b),p=o?o.palette():null;return i.removeCanvas(),p},!pv)var pv={map:function(a,b){var c={};return b?a.map(function(a,d){return c.index=d,b.call(c,a)}):a.slice()},naturalOrder:function(a,b){return b>a?-1:a>b?1:0},sum:function(a,b){var c={};return a.reduce(b?function(a,d,e){return c.index=e,a+b.call(c,d)}:function(a,b){return a+b},0)},max:function(a,b){return Math.max.apply(null,b?pv.map(a,b):a)}};var MMCQ=function(){function a(a,b,c){return(a<<2*i)+(b<<i)+c}function b(a){function b(){c.sort(a),d=!0}var c=[],d=!1;return{push:function(a){c.push(a),d=!1},peek:function(a){return d||b(),void 0===a&&(a=c.length-1),c[a]},pop:function(){return d||b(),c.pop()},size:function(){return c.length},map:function(a){return c.map(a)},debug:function(){return d||b(),c}}}function c(a,b,c,d,e,f,g){var h=this;h.r1=a,h.r2=b,h.g1=c,h.g2=d,h.b1=e,h.b2=f,h.histo=g}function d(){this.vboxes=new b(function(a,b){return pv.naturalOrder(a.vbox.count()*a.vbox.volume(),b.vbox.count()*b.vbox.volume())})}function e(b){var c,d,e,f,g=1<<3*i,h=new Array(g);return b.forEach(function(b){d=b[0]>>j,e=b[1]>>j,f=b[2]>>j,c=a(d,e,f),h[c]=(h[c]||0)+1}),h}function f(a,b){var d,e,f,g=1e6,h=0,i=1e6,k=0,l=1e6,m=0;return a.forEach(function(a){d=a[0]>>j,e=a[1]>>j,f=a[2]>>j,g>d?g=d:d>h&&(h=d),i>e?i=e:e>k&&(k=e),l>f?l=f:f>m&&(m=f)}),new c(g,h,i,k,l,m,b)}function g(b,c){function d(a){var b,d,e,f,g,h=a+"1",j=a+"2",k=0;for(i=c[h];i<=c[j];i++)if(o[i]>n/2){for(e=c.copy(),f=c.copy(),b=i-c[h],d=c[j]-i,g=d>=b?Math.min(c[j]-1,~~(i+d/2)):Math.max(c[h],~~(i-1-b/2));!o[g];)g++;for(k=p[g];!k&&o[g-1];)k=p[--g];return e[j]=g,f[h]=e[j]+1,[e,f]}}if(c.count()){var e=c.r2-c.r1+1,f=c.g2-c.g1+1,g=c.b2-c.b1+1,h=pv.max([e,f,g]);if(1==c.count())return[c.copy()];var i,j,k,l,m,n=0,o=[],p=[];if(h==e)for(i=c.r1;i<=c.r2;i++){for(l=0,j=c.g1;j<=c.g2;j++)for(k=c.b1;k<=c.b2;k++)m=a(i,j,k),l+=b[m]||0;n+=l,o[i]=n}else if(h==f)for(i=c.g1;i<=c.g2;i++){for(l=0,j=c.r1;j<=c.r2;j++)for(k=c.b1;k<=c.b2;k++)m=a(j,i,k),l+=b[m]||0;n+=l,o[i]=n}else for(i=c.b1;i<=c.b2;i++){for(l=0,j=c.r1;j<=c.r2;j++)for(k=c.g1;k<=c.g2;k++)m=a(j,k,i),l+=b[m]||0;n+=l,o[i]=n}return o.forEach(function(a,b){p[b]=n-a}),d(h==e?"r":h==f?"g":"b")}}function h(a,c){function h(a,b){for(var c,d=1,e=0;k>e;)if(c=a.pop(),c.count()){var f=g(i,c),h=f[0],j=f[1];if(!h)return;if(a.push(h),j&&(a.push(j),d++),d>=b)return;if(e++>k)return}else a.push(c),e++}if(!a.length||2>c||c>256)return!1;var i=e(a),j=0;i.forEach(function(){j++});var m=f(a,i),n=new b(function(a,b){return pv.naturalOrder(a.count(),b.count())});n.push(m),h(n,l*c);for(var o=new b(function(a,b){return pv.naturalOrder(a.count()*a.volume(),b.count()*b.volume())});n.size();)o.push(n.pop());h(o,c-o.size());for(var p=new d;o.size();)p.push(o.pop());return p}var i=5,j=8-i,k=1e3,l=.75;return c.prototype={volume:function(a){var b=this;return(!b._volume||a)&&(b._volume=(b.r2-b.r1+1)*(b.g2-b.g1+1)*(b.b2-b.b1+1)),b._volume},count:function(b){var c=this,d=c.histo;if(!c._count_set||b){var e,f,g,h=0;for(e=c.r1;e<=c.r2;e++)for(f=c.g1;f<=c.g2;f++)for(g=c.b1;g<=c.b2;g++)index=a(e,f,g),h+=d[index]||0;c._count=h,c._count_set=!0}return c._count},copy:function(){var a=this;return new c(a.r1,a.r2,a.g1,a.g2,a.b1,a.b2,a.histo)},avg:function(b){var c=this,d=c.histo;if(!c._avg||b){var e,f,g,h,j,k=0,l=1<<8-i,m=0,n=0,o=0;for(f=c.r1;f<=c.r2;f++)for(g=c.g1;g<=c.g2;g++)for(h=c.b1;h<=c.b2;h++)j=a(f,g,h),e=d[j]||0,k+=e,m+=e*(f+.5)*l,n+=e*(g+.5)*l,o+=e*(h+.5)*l;k?c._avg=[~~(m/k),~~(n/k),~~(o/k)]:c._avg=[~~(l*(c.r1+c.r2+1)/2),~~(l*(c.g1+c.g2+1)/2),~~(l*(c.b1+c.b2+1)/2)]}return c._avg},contains:function(a){var b=this,c=a[0]>>j;return gval=a[1]>>j,bval=a[2]>>j,c>=b.r1&&c<=b.r2&&gval>=b.g1&&gval<=b.g2&&bval>=b.b1&&bval<=b.b2}},d.prototype={push:function(a){this.vboxes.push({vbox:a,color:a.avg()})},palette:function(){return this.vboxes.map(function(a){return a.color})},size:function(){return this.vboxes.size()},map:function(a){for(var b=this.vboxes,c=0;c<b.size();c++)if(b.peek(c).vbox.contains(a))return b.peek(c).color;return this.nearest(a)},nearest:function(a){for(var b,c,d,e=this.vboxes,f=0;f<e.size();f++)c=Math.sqrt(Math.pow(a[0]-e.peek(f).color[0],2)+Math.pow(a[1]-e.peek(f).color[1],2)+Math.pow(a[2]-e.peek(f).color[2],2)),(b>c||void 0===b)&&(b=c,d=e.peek(f).color);return d},forcebw:function(){var a=this.vboxes;a.sort(function(a,b){return pv.naturalOrder(pv.sum(a.color),pv.sum(b.color))});var b=a[0].color;b[0]<5&&b[1]<5&&b[2]<5&&(a[0].color=[0,0,0]);var c=a.length-1,d=a[c].color;d[0]>251&&d[1]>251&&d[2]>251&&(a[c].color=[255,255,255])}},{quantize:h}}();
(function ($) {
    "use strict";

    var $components = [];
    var $header     = document.getElementById("header");
    var $footer     = document.getElementById("footer");
    var $container  = document.getElementById("container");

    document.addEventListener("DOMContentLoaded", function () {
        var component;

        for (component in $components) {
            $components[component]();
        }
    });

    $components.fixedBar = function () {
//        if(Modernizr.touchevents) {
//             var headroom = new Headroom($header, {
//                 tolerance: 20,
//                 offset : 0
//             });
//             headroom.init();
//        }
    };

    $components.searchbox = function () {
        var header                 = $('header');
        var body                   = $('body');
        var form                   = header.find('.header-search-avtocomplite');
        var input                  = form.find('input[type=text]');
        var openBtn                = header.find('.app-searchbox-btn');
        var closeBtn               = form.find('.app-searchbox-close');
        var searchbox_active_class = "sr-opened";


        openBtn.on('click', function (e) {
            e.preventDefault();

            var isVisible = body.hasClass(searchbox_active_class);

            var callback = function () {
                body.toggleClass(searchbox_active_class);
            };

            if (isVisible) {
                form.slideUp(200, callback);
            } else {
                form.slideDown(200, callback);
                input.focus();
            }

        });

        closeBtn.on('click', function (e) {
            e.preventDefault();

            window.autocomplete.autocomplete.setVal('')

            form.slideUp(200, function () {
                body.toggleClass(searchbox_active_class);
            });

        });
    };

    $components.form = function () {
        var input           = $('.app-input');
        var contenteditable = $('[contenteditable]');

        var isEmpty = function (str) {
            if (str.trim() == '') {
                return true;
            }
            return false;
        };

        var inputHandler = function () {
            var $this  = $(this);
            var $value = $this.val() || $this.text();

            if ($this.hasClass("active") && isEmpty($value)) {
                $this.removeClass("active")
            } else {
                $this.addClass("active")
            }

        };

        input.on("input", inputHandler);
        contenteditable.on("input", inputHandler);
    };

    $components.banners = function () {
        var bannerClose = $('.app-banner__close');

        bannerClose.on('click', function (e) {
            e.preventDefault();
            var banner = $(this).closest('.app-banner');

            banner.slideUp(function () {
                banner.remove();
            })
        });
    };

    $components.accordeon = function () {
        var btn = $('.app-accordeon-btn');

        btn.on('click', function (e) {
            e.preventDefault();

            var item      = $(this).closest('.app-accordeon-item');
            var inner     = item.find('.app-accordeon-item__inner');
            var isVisible = item.hasClass("active");

            var callback = function () {
                item.toggleClass("active");
            };

            if (isVisible) {
                inner.slideUp(200, callback);
            } else {
                inner.slideDown(200, callback);
            }

        });
    };

    $components.storeFilter = function () {
        var filter         = $('.app-store-filter');
        var filterCollapse = filter.find('.app-store-filter__collapse');
        var button         = filter.find('.app-button-store-filter');
        var buttonText     = button.find('.text');

        button.on('click', function (e) {
            e.preventDefault();

            var slideCallback = function () {
                buttonText.text(isActive ? 'Refine your search' : 'Hide filters');
                filterCollapse.toggleClass("opened");
                filterCollapse.removeAttr("style");
                button.toggleClass("active");
            };

            var isActive  = button.hasClass('active');
            var isVisible = filterCollapse.is(':visible');

            if (isActive && isVisible) {
                filterCollapse.slideUp(slideCallback);
            } else if (!isVisible || isActive && !isVisible) {
                filterCollapse.slideDown(slideCallback);
            }

        })
    };

    $components.desctopNavigation = function () {

        var header              = $('#header');
        var descNavigation      = $('.header-desctop-navigation');
        var descNavigationTitle = descNavigation.find('._title');
        var links               = header.find('._desktop-menu');
        var close               = header.find('#_close-menu');

        var slideCallback = function () {
            descNavigation.toggleClass("opened");
            descNavigation.removeAttr("style");
        };

        close.on('click', function (e) {
            e.preventDefault();
            descNavigation.slideUp(slideCallback);
            links.removeClass("active");
        });
        links.on('click', function (e) {
            e.preventDefault();

            var isLinkActive  = $(this).hasClass('active');
            var isDescVisible = descNavigation.is(':visible');

            var cssClass = $(this).data('class');
            descNavigation.find('._vertical a, ._horizontal, .article-news-box').each(function () {
                $(this).hide();
            });
            descNavigation.find('.' + cssClass).each(function () {
                $(this).show();
            });
            descNavigationTitle.text(this.innerText);

            descNavigation.removeClass('with-news-article');
            if (descNavigation.find('.article-news-box.' + cssClass).length) {
                descNavigation.addClass('with-news-article');
            }
            
            links.removeClass("active");
            
            if (isLinkActive && isDescVisible) {
                descNavigation.slideUp(slideCallback);
            } else if (!isDescVisible || isLinkActive && !isDescVisible) {
                descNavigation.slideDown(slideCallback);
                $(this).addClass("active");
            }
        });

    };

    $components.colorThief = function () {
        $('[color-thief]').each(function () {
            var self       = this;
            var colorThief = new ColorThief();
            var image      = $(this).find('img');

            var color                  = colorThief.getPalette(image[0])[0];
            self.style.backgroundColor = 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')';
        });
    };

    $components.mobileNavigation = function () {

        var $mobileBtn       = $('#header .app-mobile-btn');
        var $mobileMenu      = $('#app-mobile-menu');
        var $mobileMenuBtn   = $mobileMenu.find(".app-mobile-btn");
        var $mobileMenuIcon  = $mobileMenuBtn.find(".app-svg");
        var $mobileMenuClose = $('#app-mobile-menu-close');
        var $mobileMenuTitle = $('#app-mobile-menu-title');
        var $mobileMenuLink  = $('.app-main-menu__link');
        var $cocoonWhereToBuy = $('.app-left-right-flex');

        var velocityEasing   = [0.215, 0.610, 0.355, 1.000];
        var velocityDuration = 800;
        var hiddenLvlStyle   = "hidden-lvl";

        var setTitle = function (title) {
            $mobileMenuTitle.html(title)
        };

        $mobileBtn.bind('click', function (e) {
            e.preventDefault();

            $cocoonWhereToBuy.hide();
            $mobileMenu.addClass('opened');
        });

        $mobileMenuClose.bind('click', function (e) {
            e.preventDefault();
            $mobileMenu.removeClass('opened');

            var width = $(window).outerWidth();
            if (width < 1200) {
                $cocoonWhereToBuy.css({'display': 'flex'});
            } else {
                $cocoonWhereToBuy.hide();
            }
        });

        function setBackIcon(submenuActive) {
            var styleName = submenuActive ? "back-menu" : "menu";
            var isLocked = $mobileMenuIcon.hasClass('locked');
            $mobileMenuIcon[0].className = "app-svg " + styleName + (isLocked ? ' locked' : '');
        }

        $mobileMenuBtn.bind('click', function (e) {
            e.preventDefault();
            if ($mobileMenuIcon.hasClass('menu')) {
                $mobileMenu.removeClass('opened');
            } else if ($mobileMenuIcon.hasClass('back-menu')) {

                if ($mobileMenuIcon.hasClass('locked')) {
                    return;
                }

                var width        = $(window).outerWidth();
                var activeMenu   = $mobileMenu.find('ul:not(.hidden-lvl):visible');
                var prevMenu     = $(activeMenu).parents('ul');
                var prevMenuLink = prevMenu.find('> li > a');

                setBackIcon(prevMenu.parents('ul').length > 0);

                if (prevMenu.parents('ul').length < 1) {
                    setTitle('');
                } else {
                    setTitle($(prevMenuLink).html());
                }
                prevMenu.removeClass(hiddenLvlStyle);

                $.Velocity(activeMenu, {
                    translateX: [width, 0],
                    opacity: [1, 0]
                }, {
                    display: "block",
                    duration: velocityDuration - 200,
                    easing: velocityEasing,
                    complete: function () {

                    }
                });

                $.Velocity(prevMenuLink, {
                    translateX: [0, -width]
                }, {
                    duration: velocityDuration,
                    easing: velocityEasing,
                    complete: function () {

                    }
                });
            }
        });

        $mobileMenuLink.bind('click', function (e) {
            var menu  = $(this).next('ul');
            var width = $(window).outerWidth();

            if (menu.length > 0) {

                $mobileMenuIcon.addClass('locked');

                e.preventDefault();
                var prevMenu     = $(this).closest('ul');
                var prevMenuLink = prevMenu.find('> li > a');

                setBackIcon(prevMenu.length > 0);
                setTitle($(this).html());

                $.Velocity(menu, {
                    translateX: [0, width],
                    opacity: [1, 0]
                }, {
                    display: "block",
                    duration: velocityDuration - 200,
                    easing: velocityEasing,
                    complete: function () {

                    }
                });

                $.Velocity(prevMenuLink, {
                    translateX: [-width, 0]
                }, {
                    duration: velocityDuration,
                    easing: velocityEasing,
                    complete: function () {
                        prevMenu.addClass(hiddenLvlStyle);
                        $mobileMenuIcon.removeClass('locked');
                    }
                });
            }
        });

    };

    $components.desctopStoreDetails = function () {
        var storeFilter = $('.app-filter-result');
        var item = storeFilter.find('.app-filter-result__list-item');
        var details = storeFilter.find('.app-filter-result__detail-box');
        var openBtn = item.find('.app-button-reserve');
        var closeBtn = details.find('.app-modal-close');
        var openedItem = null;
        var isMobile    = window.innerWidth < 992;

        $(document).on('click', '.app-filter-result .app-filter-result__list-item .app-button-reserve', function(e){
            e.preventDefault();

            $('.wpsl-back').trigger('click');

            var $item = openedItem = $(this).closest('.app-filter-result__list-item');
            var $itemDetails = $item.find('.store-details .app-filter-result__flex-box');
            var isOpened = details.hasClass('opened');

            details.empty().append($itemDetails.clone());

            storeFilter.find('.app-filter-result__list-item').removeClass('active');
            $item.addClass('active');

            if(!isOpened) {
                $item.addClass('active');

                if (isMobile) {
                    details.addClass('opened').show();
                } else {
                    $.Velocity(details, {
                        translateX: ['100%', '0%']
                    }, {
                        display: "block",
                        duration: 300,
                        easing: "ease-out",
                        complete: function () {
                            details.addClass('opened')
                        }
                    });
                }
            }
        });

        $(document).on('click', '.app-filter-result .app-modal-close', function(e){
            e.preventDefault();

            openedItem.removeClass('active');

            if (isMobile) {
                details.removeClass('opened').hide();
            } else {
                $.Velocity(details, {
                    translateX: ['0%', '100%']
                }, {
                    display: "block",
                    duration: 300,
                    easing: "ease-out",
                    complete: function () {
                        details.removeClass('opened');
                    }
                });
            }
        });

        $(document).on('click', '.get-direction', function(e) {
            e.preventDefault();
            openedItem.find('.wpsl-directions').trigger('click');
        });
    }

    $components.stickyFooter = function () {
        var $stickyFooter = $('.shop-floating-block');

        if ($stickyFooter.length) {
            $('footer.app-footer').css('margin-bottom', $stickyFooter.height());
        }
    }
    
    $(window).scroll(function() {
        var $stickyFooter = $('.shop-floating-block');
        if($(window).scrollTop() + $(window).height() > $(document).height() - $stickyFooter.height()) {
            $('footer.app-footer').css('margin-bottom', 0);
            $stickyFooter.hide();
        } else {
            $('footer.app-footer').css('margin-bottom', $stickyFooter.height());
            $stickyFooter.show();
        }
    });

    $(window).on("resize scroll", function () {
        $('._header-link').jqDropdown('hide');
    });

    $(window).on("resize", function () {
        if ($('body').hasClass('home')) {
            var width = $(window).outerWidth();
            if (width < 768) {
                $('.img-mobilized').each(function(){
                    var $self = $(this);
                    if ($self.data('image-mobile')) {
                        $self.css('background-image', 'url(' + $self.data('image-mobile') + ')');
                    }
                });
            } else {
                $('.img-mobilized').each(function(){
                    var $self = $(this);
                    $self.css('background-image', 'url(' + $self.data('image') + ')');
                });
            }
        }
        $('#app-mobile-menu-close').click();
    });

    $(window).trigger('resize');

}(jQuery));

(function ($) {
    "use strict";

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    $(document).on('click', 'a._collections-link', function(e) {
        e.preventDefault();
        
        if ($(this).hasClass('_collections-link')) {
            window.location.href = $(this).find('span._block').first().data('href');
        }
    });

    $(document).on('click', '.download-ebook-btn', function(e) {
        // e.preventDefault();

        var valid = true;

        var $downloadForm = $(this).closest('.download-ebook-form');
        var $name = $downloadForm.find('input[name="name"]');
        var $email = $downloadForm.find('input[name="email"]');

        var $nameWrapper = $name.closest('.app-field');
        var $emailWrapper = $email.closest('.app-field');

        $nameWrapper.removeClass('invalid');
        $emailWrapper.removeClass('invalid');

        if (!$name.val()) {
            $nameWrapper.addClass('invalid');
            valid = false;
        }

        if(!validateEmail($email.val())) {
            $emailWrapper.addClass('invalid');
            valid = false;
        }

        if (false === valid) {
            e.preventDefault();
        } else {
            $name.val('');
            $email.val('');
        }
    });

    $(document).on('click', '.js-signup-newsletter', function (e) {
        e.preventDefault();
        $('#app-mobile-menu-close').click();
        var $signUpNewsletter = $('#newsletter-signup');
        $('body').addClass('modal-opened');
        $signUpNewsletter.show();
    });
    
    $(document).on('click', '.js-show-twist-modal', function (e) {
        e.preventDefault();
        $('#app-mobile-menu-close').click();
        var $signUpNewsletter = $('#newsletter-signup');
        $('body').addClass('modal-opened');
        $signUpNewsletter.show();
    });

    $(document).on('click', '#newsletter-signup .app-modal-close', function (e) {
        e.preventDefault();

        var $modal = $('#newsletter-signup');

        var $name = $modal.find('input[name="name"]');
        var $email = $modal.find('input[name="email"]');

        $name.val('').removeClass("active");
        $email.val('').removeClass("active");

        $modal.find('#newsletter-form-block').show();
        $modal.find('#newsletter-thankyou-block').hide();

        $modal.hide();

        $('body').removeClass('modal-opened');
    });
    
    $(document).on('click', '._twist-modal-popup.active .app-modal-close-twist', function (e) {
        e.preventDefault();

        var $modal = $('._twist-modal-popup.active');

        $modal.remove();

        $('body').removeClass('modal-opened');
    });
    
    $(document).on('click', '#newsletter-signup .app-modal-close2', function (e) {
        e.preventDefault();

        var $modal = $('#newsletter-signup');

        var $name = $modal.find('input[name="name"]');
        var $email = $modal.find('input[name="email"]');

        $name.val('').removeClass("active");
        $email.val('').removeClass("active");

        $modal.find('#newsletter-form-block').show();
        $modal.find('#newsletter-thankyou-block').hide();

        $modal.hide();

        $('body').removeClass('modal-opened');
    });
    
    $(document).keyup(function(e) {
        if (e.keyCode == 27 && $('body').hasClass('modal-opened')) { 
            $('#newsletter-signup .app-modal-close').click();
            $('._twist-modal-popup.active .app-modal-close-twist').click();
        }
    });

    $(document).on('click', '#newsletter-signup #newsletter-form-block .js-newsletter-sbmt-btn', function (e) {
        e.preventDefault();

        var valid = true;
        var $modal = $(this).closest('#newsletter-signup');

        var $name = $modal.find('input[name="name"]');
        var $email = $modal.find('input[name="email"]');

        var $nameWrapper = $name.closest('.app-field');
        var $emailWrapper = $email.closest('.app-field');

        $nameWrapper.removeClass('invalid');
        $emailWrapper.removeClass('invalid');

        if (!$name.val()) {
            $nameWrapper.addClass('invalid');
            valid = false;
        }

        if(!validateEmail($email.val())) {
            $emailWrapper.addClass('invalid');
            valid = false;
        }

        if (true === valid) {
            $name.val('');
            $email.val('');

            $modal.find('#newsletter-form-block').hide();
            $modal.find('#newsletter-thankyou-block').show();
        }
    });

    $(document).on('click', '#newsletter-signup #newsletter-thankyou-block .js-newsletter-back-btn', function (e) {
        e.preventDefault();

        var $modal = $(this).closest('#newsletter-signup');
        $modal.find('.app-modal-close').trigger('click');
    });

    var miracoilSwiper = new Swiper('.app-miracoil-swiper .swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        onSlideChangeEnd: function(swiper){
            var $nav = jQuery('.miracoil-swiper-nav');
            $nav.find('a').each(function() {
                jQuery(this).removeClass('active');
            });
            $nav.find('a').eq(swiper.realIndex).addClass('active');

        }
    });

    var reviewsSwiper = new Swiper('.app-reviews-swiper .swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 50,
        breakpoints: {
            1280: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30
            }
        }
    });

    var dealsSwiper = new Swiper('.app-deals-swiper .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 40,
        breakpoints: {
            1280: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1
            }
        }
    });

    function miracoilSwiperTrigger(e) {
        e.preventDefault();
        var $this  = $(e.target);
        var $nav   = $this.closest('nav');

        var $links = $nav.find('a');
        var $index = $links.index($this) + 1;

        $links.removeClass('active');
        $this.addClass('active');
        miracoilSwiper.slideTo($index);
    }

    window.miracoilSwiperTrigger = miracoilSwiperTrigger;

    $(function() {
        $('a[href*=#]:not([href=#]):not(._collapsed-title)').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    target.velocity('scroll', {
                        duration: 1000,
                        easing: "ease-in-out",
                        offset: -50
                    });
                    return false;
                }
            }
        });
    });
    
    var isEmpty = function (str) {
        if (str.trim() == '') {
            return true;
        }
        return false;
    };

    var inputHandler = function () {
        var $this  = $(this);
        var $value = $this.val() || $this.text();

        if ($this.hasClass("active") && isEmpty($value)) {
            $this.removeClass("active")
        } else {
            $this.addClass("active")
        }

    };
    
    $('._newsletter-form-gravity_wrapper').find('input[type=text]').each(function() {
        $(this).on('input', inputHandler);
    });
    
    $(document).on('click', '.close-icon', function(e) {
        var $input = $(e.target).closest('span').find('input');
        $input.val('');
        $input.text('');
        $input.removeClass("active");

        
    });
    
    $(document).bind('gform_post_render', function(){
        $('._newsletter-form-gravity_wrapper').find('input[type=text]').each(function() {
            $(this).on('input', inputHandler);
            var $this  = $(this);
            var $value = $this.val() || $this.text();

            if (isEmpty($value)) {
                $this.removeClass("active")
            } else {
                $this.addClass("active")
            }
            var placeholder = $(this).attr('placeholder');
            if ($(this).parent().find('.close-icon').length < 1) {
                $(this).parent().append('<button class="close-icon" type="button"></button>');
            }
            if (placeholder !== '' && typeof placeholder !== 'undefined') {
                $(this).removeAttr('placeholder');
                $(this).parent().append('<div class="app-input-placeholder">' + placeholder +'</div>');
            }
           
        });
    });

    $(document).on('click', '#_all-reviews-cta', function() {
        $('#_all-reviews-cta-loading').removeClass('_not-visible');
    });
    
    var gformConfirm = document.getElementById("gform_confirmation_wrapper_4");
    if (gformConfirm) {
        location.href = "#gform_confirmation_wrapper_4";
    }
    
    $(document).on('click', '.gf_step_next',function() {
       $('.gform_next_button').click(); 
    });
    
    $(document).on('click', '.gf_step_previous',function() {
       $('.gform_previous_button').click(); 
    });
    var contForm = document.querySelector('._contact-form');
    var arrPlhldrsName = [];

    var divPlhldrs = [];
    var placeholdersInit = function() {

            var valErr = document.querySelector('.validation_error');
            if (valErr) {
                valErr.classList.add('val-err-new');
            }

            var inp = document.querySelectorAll('._contact-form input[type="text"]');
//            var address = document.querySelector('.advanced-address-autocomplete');
//            if (address) {
//                if ($(address).parent().find('.cstm-inpt-plchldr').length !== 0) return;
//                var placeholderDiv = document.createElement('div'); 
//                placeholderDiv.className = 'cstm-inpt-plchldr';
//                var plcholder = $(address).attr('placeholder');
//                var araiLabel = $(address).attr('aria-label');
//                if (typeof plcholder !== 'undefined' && plcholder !== false && plcholder !== '') {
//                    placeholderDiv.innerHTML = plcholder;
//                } else if (typeof araiLabel !== 'undefined' && araiLabel !== false && araiLabel !== '') {
//                    placeholderDiv.innerHTML = araiLabel;
//                } else {
//                     placeholderDiv.innerHTML = $('label[for="'+ $(address).attr('id') +'"]').text();
//                }
//                
//                placeholderDiv.addEventListener('click', handleClick);
//                $(address).parent().append(placeholderDiv);
//                var element = document.getElementById($(address).attr('id'));
//                element.addEventListener('focus', handleFocus);
//                element.addEventListener('blur', handleFocus);
//                if (element.value) placeholderDiv.classList.add('activity');
//                if (jQuery(address).val() !== '') {
//                    placeholderDiv.classList.add('activity');
//                }
//            }
//            var inpComplex = $('._contact-form .ginput_complex input');
            var txtArea = document.querySelectorAll('._contact-form .textarea.medium');
//            inpComplex.each(function() {
//                if ($(this).parent().hasClass('ginput_container_fileupload')) return;
//                if ($(this).parent().find('.cstm-inpt-plchldr').length !== 0) return;
//                var placeholderDiv = document.createElement('div'); 
//                placeholderDiv.className = 'cstm-inpt-plchldr';
//                var plcholder = $(this).attr('placeholder');
//                var araiLabel = $(this).attr('aria-label');
//                if (typeof plcholder !== 'undefined' && plcholder !== false && plcholder !== '') {
//                    placeholderDiv.innerHTML = plcholder;
//                } else if (typeof araiLabel !== 'undefined' && araiLabel !== false && araiLabel !== '') {
//                    placeholderDiv.innerHTML = araiLabel;
//                } else {
//                     placeholderDiv.innerHTML = $('label[for="'+ $(this).attr('id') +'"]').text();
//                }
//                
//                placeholderDiv.addEventListener('click', handleClick);
//                $(this).parent().append(placeholderDiv);
//                var element = document.getElementById($(this).attr('id'));
//                element.addEventListener('focus', handleFocus);
//                element.addEventListener('blur', handleFocus);
//                if (element.value) placeholderDiv.classList.add('activity');
//                if (jQuery(this).val() !== '') {
//                    placeholderDiv.classList.add('activity');
//                }
//            });
            
            for (var i = 0; i < inp.length; i++) {
                if ($(inp[i]).parent().hasClass('ginput_container_fileupload')) {continue; }
                if ($(inp[i]).closest('.ginput_container').hasClass('ginput_container_radio')) {continue; }
                if ($(inp[i]).parent().find('.cstm-inpt-plchldr').length !== 0) {continue; }
                var placeholderDiv = document.createElement('div'); 
                placeholderDiv.className = 'cstm-inpt-plchldr';
                if (inp[i].hasAttribute('placeholder') && inp[i].getAttribute('placeholder') !== '') {
                    placeholderDiv.innerHTML = inp[i].getAttribute('placeholder');
                    inp[i].removeAttribute('placeholder');
                } else if (inp[i].hasAttribute('aria-label')){
                    placeholderDiv.innerHTML = inp[i].getAttribute('aria-label');
                } else {
                    placeholderDiv.innerHTML = $('label[for="'+ $(inp[i]).attr('id') +'"]').last().text();
                }
                
                if ($(inp[i]).hasClass('advanced-address-autocomplete')) {
                    placeholderDiv.innerHTML = 'Address';
                }
                placeholderDiv.addEventListener('click', handleClick);
                inp[i].parentElement.appendChild(placeholderDiv);
                inp[i].addEventListener('focus', handleFocusIn);
                inp[i].addEventListener('blur', handleFocusOut);
                inp[i].addEventListener('change', handleChange);
                if (inp[i].value) placeholderDiv.classList.add('activity');
                if (jQuery(inp[i]).val() !== '') {
                    placeholderDiv.classList.add('activity');
                }
            }

            if (txtArea) {
                for (var i = 0; i < txtArea.length; i++) {
                    arrPlhldrsName.push(txtArea[i].getAttribute('placeholder'));
                    var placeholderDiv = document.createElement('div');  
                    placeholderDiv.className = 'cstm-inpt-plchldr';
                    placeholderDiv.innerHTML = txtArea[i].getAttribute('placeholder');
                    txtArea[i].removeAttribute('placeholder');
                    placeholderDiv.addEventListener('click', handleClick);
                    txtArea[i].parentElement.appendChild(placeholderDiv);
                    txtArea[i].addEventListener('focus', handleFocusIn);
                    txtArea[i].addEventListener('blur', handleFocusOut);
                    if (txtArea[i].value) placeholderDiv.classList.add('activity');
                }
            }
            
            $('.ginput_container_select').each(function() {
               $(this).prev('.gfield_label').addClass('_gfield-select-label');
            });
            $('.ginput_container_radio').each(function() {
               $(this).prev('.gfield_label').addClass('_gfield-select-label');
            });
            $('.ginput_container_multiselect').each(function() {
               $(this).prev('.gfield_label').addClass('_gfield-select-label');
            });
            $('.ginput_container_checkbox').each(function() {
               $(this).prev('.gfield_label').addClass('_gfield-select-label');
            });
            $('.gfield_chainedselect').each(function() {
               $(this).prev('.gfield_label').addClass('_gfield-select-label');
            });
            $('.ginput_container.ginput_container_fileupload').each(function() {
               $(this).prev('.gfield_label').addClass('_gfield-select-label');
            });
            
            $(document).on('change', '.advanced-address-autocomplete', function() {
                setTimeout(function() {
                    for (var i = 0; i < inp.length; i++) {
                        if (!$(inp[i]).hasClass('advanced-address-autocomplete')) {
                            if (inp[i].value) inp[i].parentElement.querySelector('.cstm-inpt-plchldr').classList.add('activity');
                        }
                    }
                }, 100);
            })
        }
            //arrPlhldrsName.push(document.querySelector('.gfield_label').textContent);
            
            
            

//            for (var i = 0; i < arrPlhldrsName.length; i++) {
//                if (inp[i] && inp[i].hasAttribute('placeholder')) inp[i].removeAttribute('placeholder');
//                
//                if (txtArea[i] && txtArea[i].hasAttribute('placeholder')) txtArea[i].removeAttribute('placeholder');
//
//                var divPlhldr = document.createElement('div');
//                divPlhldrs.push(divPlhldr);
//
//                divPlhldrs[i].className = 'cstm-inpt-plchldr';
//                divPlhldrs[i].innerHTML = arrPlhldrsName[i];
//
//                if (i == arrPlhldrsName.length - 2) {
//                    txtArea.parentElement.appendChild(divPlhldrs[i]);
//
//                    txtArea.addEventListener('focus', handleFocus);
//                    txtArea.addEventListener('blur', handleFocus);
//
//                    continue;
//                }
//
//                if (i == arrPlhldrsName.length - 1) {
//                    var sel = document.querySelector('select.medium.gfield_select');
//
//                    sel.setAttribute('required', '');
//                    sel.children[0].setAttribute('disabled', '');
//                    sel.children[0].setAttribute('selected', '');
//
//                    sel.parentElement.appendChild(divPlhldrs[i]);
//
//                    sel.addEventListener('focus', handleFocus);
//                    sel.addEventListener('blur', handleFocus);
//
//                    continue;
//                }
//
//                inp[i].parentElement.appendChild(divPlhldrs[i]);
//
//                inp[i].addEventListener('focus', handleFocus);
//                inp[i].addEventListener('blur', handleFocus);
//
//                if (inp[i].value) divPlhldrs[i].classList.add('activity');
//            }
//            divPlhldrs.forEach(itm => {
//                itm.addEventListener('click', handleClick);
//            });
            
            function handleClick(e) {
                if ($(e.target).hasClass('activity')) {
                    var input = e.target.parentElement.querySelector('input');
                    var textarea = e.target.parentElement.querySelector('textarea');
                    if (input) {
                        input.blur();
                    }
                    if (textarea) {
                        textarea.blur();
                    }
                } else {
                    var input = e.target.parentElement.querySelector('input');
                    var textarea = e.target.parentElement.querySelector('textarea');
                    if (input) {
                        input.focus();
                    }
                    if (textarea) {
                        textarea.focus();
                    }
                }
            }



            

            function handleFocusIn(e) {
                e.target.parentElement.querySelector('.cstm-inpt-plchldr').classList.add('activity');
            }
            function handleFocusOut(e) {
                if (e.target.value) e.target.parentElement.querySelector('.cstm-inpt-plchldr').classList.add('activity');
                else e.target.parentElement.querySelector('.cstm-inpt-plchldr').classList.remove('activity');
            }
            
            function handleChange(e) {
                if (e.target.value) e.target.parentElement.querySelector('.cstm-inpt-plchldr').classList.add('activity');
                else e.target.parentElement.querySelector('.cstm-inpt-plchldr').classList.remove('activity');
            }


            var valErr = document.querySelector('.validation_error');
            if (valErr) {
                valErr.classList.add('val-err-new');
            }

            
            window.onresize = function(e) {
                if (contForm) {
                    var clWdth = document.documentElement.clientWidth;
                    var contFormWdth = contForm.getBoundingClientRect().width;
                    // var clWdth = e.target.innerWidth;
                    if (clWdth < 900 && valErr) {
                        valErr.style.position = '';
                        valErr.style.left = '';
                        valErr.style.width = '';
                        return;
                    }

                    var contFormWdth = contForm.getBoundingClientRect().width;
                    var contFormLft = (clWdth / 2) - (contFormWdth / 2);
                    if (valErr) {
                        valErr.style.position = 'relative';
                        valErr.style.left = '-' + contFormLft + 'px';
                        valErr.style.width = clWdth + 'px';
                    }
                }
            };
            window.onresize();
            
            jQuery(document).bind('gform_post_render', function(){
                placeholdersInit();
            });
            
    $('._app-banner-clickable div.page-h3, ._app-banner-clickable h1, ._app-banner-clickable img').on('click', function(e) {
        var self = $(this);
        if (!$(e.target).hasClass('app-banner__close')) {
            e.preventDefault();
            
            var element = self.find('a._target-link-promo').first();
            
            if (typeof element == 'undefined' || typeof element.attr('href') == 'undefined') {
                element = self.find('a').first();
            }
            if (typeof element !== 'undefined' && typeof element.attr('href') !== 'undefined') {
                window.location.href = element.attr('href');
            }
        } 
    });
    
    $(document).ready(function(){
        setTimeout(function() {
            $('._fix-button-margin').each(function() {
            var button = $(this).find('.app-button-reserve');
            var subtitle = $(this).find('.article-inline-goods__subtitle');
            if (subtitle.height() > button.height()) {
                var mrg = subtitle.height() - button.height() - 2;
                button.css('margin-bottom',mrg+'px');
            }
        });
        }, 2000);
        
    });
    
    
    var productSlider = $('.mezzo-product-box-slider');
    var productPoint = $('.mezzo-product-points');
    var collapse = $('#collapseOne, #collapseTwo');

    productSlider.on('init reInit afterChange', function (event, slick, current) {
      var i = (current ? current : 0) + 1;
      $('.mezzo-product-nav-count').html(i + '<span>/</span>' + slick.slideCount);
    });

    productSlider.slick({
      asNavFor: '.mezzo-product-points',
      appendDots: '.mezzo-product-container',
      appendArrows: '.mezzo-product-nav',
      adaptiveHeight: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      draggable: false,
      centerMode: true,
      arrows: true,
      dots: true,
      fade: true,
      prevArrow: '<div class="mezzo-product-nav-prev">' +
        '<svg class="icon angle-left"><use xlink:href="#angle-left"></use></svg>' +
      '</div>',
      nextArrow: '<div class="mezzo-product-nav-next">' +
        '<svg class="icon angle-right"><use xlink:href="#angle-right"></use></svg>' +
      '</div>'
    });

    productPoint.slick({
      asNavFor: '.mezzo-product-box-slider',
      focusOnSelect: true,
      variableWidth: true,
      slidesToScroll: 3,
      slidesToShow: 3,
      draggable: false,
      infinite: false,
      arrows: false,
    });


    collapse.on('shown.bs.collapse', function () {
      productSlider.slick('setPosition');
    });
    collapse.on('hidden.bs.collapse', function () {
      $(productSlider).slick('setPosition');
    });
            
}(jQuery));

jQuery(document).ready(function(){
    
    jQuery('.ginput_container_multiselect select').multipleSelect({placeholder: "Please select"});

    jQuery(".technology-filter-button").on("click",function () {
        var filter = jQuery(this).attr("data-filter");
        var data = jQuery('.alm-listing').data();

        jQuery(".technology-filter-button").removeClass("active");
        jQuery(this).addClass("active");
        data['category'] = filter;

        loadData(data);
    });

    jQuery(".mobile-filter-change").on("change",function () {
        var filter = jQuery(this).val();
        var data = jQuery('.alm-listing').data();

        data['category'] = filter;

        loadData(data);
    });

    jQuery('.carousel').carousel();

    jQuery("body").keyup(function(e){
        var carousel = jQuery(".modal.in").find(".carousel").attr("id");
        if(carousel){
            if(e.keyCode == 37){
                jQuery("#"+carousel).carousel('prev');
            }
            if(e.keyCode == 39){
                jQuery("#"+carousel).carousel('next');
            }
        }
    });

    jQuery(".left.carousel-control").on("click", function (e) {
        e.preventDefault();
        jQuery(".carousel").carousel('prev');
    });
    jQuery(".right.carousel-control").on("click", function (e) {
        e.preventDefault();
        jQuery(".carousel").carousel('next');
    });
    
    jQuery(document).on('click', '.app-offers-item', function() {
        if (window.ga && ga.loaded) {
            ga('send', 'event',  'Special Offers', jQuery(this).data('retailer'), jQuery(this).data('offer'));
        }
    });
    
});


function loadData(data) {
    var transition = 'fade', // 'slide' | 'fade' | null
        speed = '1000'; //in milliseconds
    jQuery.fn.almFilter(transition, speed, data);
};

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

(function ($) {

    'use strict';

    if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
        return;
    }

    wpcf7 = $.extend({
        cached: 0,
        inputs: []
    }, wpcf7);

    $(function () {
        wpcf7.supportHtml5 = (function () {
            var features = {};
            var input    = document.createElement('input');

            features.placeholder = 'placeholder' in input;

            var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];

            $.each(inputTypes, function (index, value) {
                input.setAttribute('type', value);
                features[value] = input.type !== 'text';
            });

            return features;
        })();

        $('div.wpcf7 > form').each(function () {
            var $form = $(this);
            wpcf7.initForm($form);

            if (wpcf7.cached) {
                wpcf7.refill($form);
            }
        });
    });

    wpcf7.getId = function (form) {
        return parseInt($('input[name="_wpcf7"]', form).val(), 10);
    };

    wpcf7.initForm = function (form) {
        var $form = $(form);

        $form.submit(function (event) {
            if (typeof window.FormData !== 'function') {
                return;
            }

            wpcf7.submit($form);
            event.preventDefault();
        });

        $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');

        wpcf7.toggleSubmit($form);

        $form.on('click', '.wpcf7-acceptance', function () {
            wpcf7.toggleSubmit($form);
        });

        // Exclusive Checkbox
        $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function () {
            var name = $(this).attr('name');
            $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });

        // Free Text Option for Checkboxes and Radio Buttons
        $('.wpcf7-list-item.has-free-text', $form).each(function () {
            var $freetext = $(':input.wpcf7-free-text', this);
            var $wrap     = $(this).closest('.wpcf7-form-control');

            if ($(':checkbox, :radio', this).is(':checked')) {
                $freetext.prop('disabled', false);
            } else {
                $freetext.prop('disabled', true);
            }

            $wrap.on('change', ':checkbox, :radio', function () {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');

                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });

        // Placeholder Fallback
        if (!wpcf7.supportHtml5.placeholder) {
            $('[placeholder]', $form).each(function () {
                $(this).val($(this).attr('placeholder'));
                $(this).addClass('placeheld');

                $(this).focus(function () {
                    if ($(this).hasClass('placeheld')) {
                        $(this).val('').removeClass('placeheld');
                    }
                });

                $(this).blur(function () {
                    if ('' === $(this).val()) {
                        $(this).val($(this).attr('placeholder'));
                        $(this).addClass('placeheld');
                    }
                });
            });
        }

        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
            $form.find('input.wpcf7-date[type="date"]').each(function () {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }

        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
            $form.find('input.wpcf7-number[type="number"]').each(function () {
                $(this).spinner({
                    min: $(this).attr('min'),
                    max: $(this).attr('max'),
                    step: $(this).attr('step')
                });
            });
        }

        // Character Count
        $('.wpcf7-character-count', $form).each(function () {
            var $count   = $(this);
            var name     = $count.attr('data-target-name');
            var down     = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum  = parseInt($count.attr('data-maximum-value'), 10);
            var minimum  = parseInt($count.attr('data-minimum-value'), 10);

            var updateCount = function (target) {
                var $target = $(target);
                var length  = $target.val().length;
                var count   = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);

                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }

                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };

            $(':input[name="' + name + '"]', $form).each(function () {
                updateCount(this);

                $(this).keyup(function () {
                    updateCount(this);
                });
            });
        });

        $form.on('change', '.wpcf7-validates-as-url', function () {
            var val = $.trim($(this).val());

            // check the scheme part
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i)) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }

            $(this).val(val);
        });
    };

    wpcf7.submit = function (form) {
        var $form = $(form);

        $('[placeholder].placeheld', $form).each(function (i, n) {
            $(n).val('');
        });

        wpcf7.clearResponse($form);
        $('.ajax-loader', $form).addClass('is-active');

        if (typeof window.FormData !== 'function') {
            return;
        }

        $('textarea[name="message"]', $form).val(
            $('.app-textarea', $form).html().replace(/<div>/gi,"\n").replace(/<\/div>/gi,'').replace(/<br>/gi,"\n").trim()
        );

        var formData = new FormData($form.get(0));

        var ajaxSuccess = function (data, status, xhr, $form) {
            var detail = {
                id: $(data.into).attr('id'),
                status: data.status,
                inputs: []
            };

            $.each($form.serializeArray(), function (i, field) {
                if ('_wpcf7' == field.name) {
                    detail.contactFormId = field.value;
                } else if ('_wpcf7_version' == field.name) {
                    detail.pluginVersion = field.value;
                } else if ('_wpcf7_locale' == field.name) {
                    detail.contactFormLocale = field.value;
                } else if ('_wpcf7_unit_tag' == field.name) {
                    detail.unitTag = field.value;
                } else if ('_wpcf7_container_post' == field.name) {
                    detail.containerPostId = field.value;
                } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
                    var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
                    detail.inputs.push({
                        name: owner + '-free-text',
                        value: field.value
                    });
                } else if (field.name.match(/^_/)) {
                    // do nothing
                } else {
                    detail.inputs.push(field);
                }
            });

            var $message = $('.app-contacts-form__error');

            switch (data.status) {
                case 'validation_failed':
                    $.each(data.invalidFields, function (i, n) {
                        $(n.into, $form).each(function () {
                            // wpcf7.notValidTip(this, n.message);
                            $(this).closest('.app-field').addClass('invalid');
                            $(this).attr('aria-invalid', 'true');

                            var name = n.field.replace('your-', '');
                            $message.append(
                                $('<div>', {'class' : 'app-contacts-form'}).text('Please enter your ' + name)
                            );
                        });
                    });

                    $message.show();


                    $form.addClass('invalid');

                    wpcf7.triggerEvent(data.into, 'invalid', detail);
                    break;
                case 'spam':
                    // $message.addClass('wpcf7-spam-blocked');
                    $form.addClass('spam');

                    $('[name="g-recaptcha-response"]', $form).each(function () {
                        if ('' === $(this).val()) {
                            var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
                            wpcf7.notValidTip($recaptcha, wpcf7.recaptcha.messages.empty);
                        }
                    });

                    wpcf7.triggerEvent(data.into, 'spam', detail);
                    break;
                case 'mail_sent':
                    // $message.addClass('wpcf7-mail-sent-ok');
                    $form.addClass('sent');

                    if (data.onSentOk) {
                        $.each(data.onSentOk, function (i, n) {
                            eval(n)
                        });
                    }

                    wpcf7.triggerEvent(data.into, 'mailsent', detail);
                    break;
                case 'mail_failed':
                case 'acceptance_missing':
                default:
                    $message.addClass('wpcf7-mail-sent-ng');
                    // $form.addClass('failed');

                    wpcf7.triggerEvent(data.into, 'mailfailed', detail);
            }

            wpcf7.refill($form, data);

            if (data.onSubmit) {
                $.each(data.onSubmit, function (i, n) {
                    eval(n)
                });
            }

            wpcf7.triggerEvent(data.into, 'submit', detail);

            if ('mail_sent' == data.status) {
                $form.each(function () {
                    this.reset();
                });
            }

            $form.find('[placeholder].placeheld').each(function (i, n) {
                $(n).val($(n).attr('placeholder'));
            });

            // $message.html('').append(data.message).slideDown('fast');
            // $message.attr('role', 'alert');

            $('.screen-reader-response', $form.closest('.wpcf7')).each(function () {
                var $response = $(this);
                $response.html('').attr('role', '').append(data.message);

                if (data.invalidFields) {
                    var $invalids = $('<ul></ul>');

                    $.each(data.invalidFields, function (i, n) {
                        if (n.idref) {
                            var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                        } else {
                            var $li = $('<li></li>').append(n.message);
                        }

                        $invalids.append($li);
                    });

                    $response.append($invalids);
                }

                $response.attr('role', 'alert').focus();
            });
        };

        $.ajax({
            type: 'POST',
            url: wpcf7.apiSettings.getRoute(
                '/contact-forms/' + wpcf7.getId($form) + '/feedback'),
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        }).done(function (data, status, xhr) {
            ajaxSuccess(data, status, xhr, $form);
            $('.ajax-loader', $form).removeClass('is-active');
        }).fail(function (xhr, status, error) {
            var $e = $('<div class="ajax-error"></div>').text(error.message);
            $form.after($e);
        });
    };

    wpcf7.triggerEvent = function (target, name, detail) {
        var $target = $(target);

        /* DOM event */
        var event = new CustomEvent('wpcf7' + name, {
            bubbles: true,
            detail: detail
        });

        $target.get(0).dispatchEvent(event);

        /* jQuery event */
        $target.trigger('wpcf7:' + name, detail);
        $target.trigger(name + '.wpcf7', detail); // deprecated
    };

    wpcf7.toggleSubmit = function (form, state) {
        var $form   = $(form);
        var $submit = $('input:submit', $form);

        if (typeof state !== 'undefined') {
            $submit.prop('disabled', !state);
            return;
        }

        if ($form.hasClass('wpcf7-acceptance-as-validation')) {
            return;
        }

        $submit.prop('disabled', false);

        $('input:checkbox.wpcf7-acceptance', $form).each(function () {
            var $a = $(this);

            if ($a.hasClass('wpcf7-invert') && $a.is(':checked')
                || !$a.hasClass('wpcf7-invert') && !$a.is(':checked')) {
                $submit.prop('disabled', true);
                return false;
            }
        });
    };

    wpcf7.notValidTip = function (target, message) {
        var $target = $(target);
        $('.wpcf7-not-valid-tip', $target).remove();
        $('<span role="alert" class="wpcf7-not-valid-tip"></span>')
            .text(message).appendTo($target);

        if ($target.is('.use-floating-validation-tip *')) {
            var fadeOut = function (target) {
                $(target).not(':hidden').animate({
                    opacity: 0
                }, 'fast', function () {
                    $(this).css({'z-index': -100});
                });
            };

            $target.on('mouseover', '.wpcf7-not-valid-tip', function () {
                fadeOut(this);
            });

            $target.on('focus', ':input', function () {
                fadeOut($('.wpcf7-not-valid-tip', $target));
            });
        }
    };

    wpcf7.refill = function (form, data) {
        var $form = $(form);

        var refillCaptcha = function ($form, items) {
            $.each(items, function (i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        };

        var refillQuiz = function ($form, items) {
            $.each(items, function (i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        };

        if (typeof data === 'undefined') {
            $.ajax({
                type: 'GET',
                url: wpcf7.apiSettings.getRoute(
                    '/contact-forms/' + wpcf7.getId($form) + '/refill'),
                dataType: 'json'
            }).done(function (data, status, xhr) {
                if (data.captcha) {
                    refillCaptcha($form, data.captcha);
                }

                if (data.quiz) {
                    refillQuiz($form, data.quiz);
                }
            });

        } else {
            if (data.captcha) {
                refillCaptcha($form, data.captcha);
            }

            if (data.quiz) {
                refillQuiz($form, data.quiz);
            }
        }
    };

    wpcf7.clearResponse = function (form) {
        var $form = $(form);
        $form.removeClass('invalid spam sent failed');
        $form.siblings('.screen-reader-response').html('').attr('role', '');

        $('.wpcf7-not-valid-tip', $form).remove();
        $('[aria-invalid]', $form).attr('aria-invalid', 'false');
        $('.app-field', $form).removeClass('invalid');

        $('.app-contacts-form__error').hide().empty();
    };

    wpcf7.apiSettings.getRoute = function (path) {
        var url = wpcf7.apiSettings.root;

        url = url.replace(
            wpcf7.apiSettings.namespace,
            wpcf7.apiSettings.namespace + path);

        return url;
    };

})(jQuery);

/*
 * Polyfill for Internet Explorer
 * See https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */
(function () {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params  = params || {bubbles: false, cancelable: false, detail: undefined};
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event,
            params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();

(function(t,e){"use strict";var a=function(t){this.elem=t};a.init=function(){var t=e.querySelectorAll(".sharer"),r,i=t.length;for(r=0;r<i;r++){t[r].addEventListener("click",a.add)}};a.add=function(t){var e=t.currentTarget||t.srcElement;var r=new a(e);r.share()};a.prototype={constructor:a,getValue:function(t,e){e=e===undefined?"":e;var a=this.elem.getAttribute("data-"+t);return a===undefined||a===null?e:a},share:function(){var t=this.getValue("sharer").toLowerCase(),e={facebook:{shareUrl:"https://www.facebook.com/sharer/sharer.php",params:{u:this.getValue("url")}},googleplus:{shareUrl:"https://plus.google.com/share",params:{url:this.getValue("url")}},linkedin:{shareUrl:"https://www.linkedin.com/shareArticle",params:{url:this.getValue("url"),mini:true}},twitter:{shareUrl:"https://twitter.com/intent/tweet/",params:{text:this.getValue("title"),url:this.getValue("url"),hashtags:this.getValue("hashtags"),via:this.getValue("via")}},email:{shareUrl:"mailto:"+this.getValue("to"),params:{subject:this.getValue("subject"),body:this.getValue("title")+"\n"+this.getValue("url")},isLink:true},whatsapp:{shareUrl:"whatsapp://send",params:{text:this.getValue("title")+" "+this.getValue("url")},isLink:true},telegram:{shareUrl:"tg://msg_url",params:{text:this.getValue("title")+" "+this.getValue("url")},isLink:true},viber:{shareUrl:"viber://forward",params:{text:this.getValue("title")+" "+this.getValue("url")},isLink:true},line:{shareUrl:"http://line.me/R/msg/text/?"+encodeURIComponent(this.getValue("title")+" "+this.getValue("url")),isLink:true},pinterest:{shareUrl:"https://www.pinterest.com/pin/create/button/",params:{url:this.getValue("url"),media:this.getValue("image"),description:this.getValue("description")}},tumblr:{shareUrl:"http://tumblr.com/widgets/share/tool",params:{canonicalUrl:this.getValue("url"),content:this.getValue("url"),posttype:"link",title:this.getValue("title"),caption:this.getValue("caption"),tags:this.getValue("tags")}},hackernews:{shareUrl:"https://news.ycombinator.com/submitlink",params:{u:this.getValue("url"),t:this.getValue("title")}},reddit:{shareUrl:"https://www.reddit.com/submit",params:{url:this.getValue("url")}},vk:{shareUrl:"http://vk.com/share.php",params:{url:this.getValue("url"),title:this.getValue("title"),description:this.getValue("caption"),image:this.getValue("image")}},xing:{shareUrl:"https://www.xing.com/app/user",params:{op:"share",url:this.getValue("url"),title:this.getValue("title")}},buffer:{shareUrl:"https://buffer.com/add",params:{url:this.getValue("url"),title:this.getValue("title"),via:this.getValue("via"),picture:this.getValue("picture")}},instapaper:{shareUrl:"http://www.instapaper.com/edit",params:{url:this.getValue("url"),title:this.getValue("title"),description:this.getValue("description")}},pocket:{shareUrl:"https://getpocket.com/save",params:{url:this.getValue("url")}},digg:{shareUrl:"http://www.digg.com/submit",params:{url:this.getValue("url")}},stumbleupon:{shareUrl:"http://www.stumbleupon.com/submit",params:{url:this.getValue("url"),title:this.getValue("title")}},flipboard:{shareUrl:"https://share.flipboard.com/bookmarklet/popout",params:{v:2,title:this.getValue("title"),url:this.getValue("url"),t:Date.now()}},weibo:{shareUrl:"http://service.weibo.com/share/share.php",params:{url:this.getValue("url"),title:this.getValue("title"),pic:this.getValue("image"),appkey:this.getValue("appkey"),ralateUid:this.getValue("ralateuid"),language:"zh_cn"}},renren:{shareUrl:"http://share.renren.com/share/buttonshare",params:{link:this.getValue("url")}},myspace:{shareUrl:"https://myspace.com/post",params:{u:this.getValue("url"),t:this.getValue("title"),c:this.getValue("description")}},blogger:{shareUrl:"https://www.blogger.com/blog-this.g",params:{u:this.getValue("url"),n:this.getValue("title"),t:this.getValue("description")}},baidu:{shareUrl:"http://cang.baidu.com/do/add",params:{it:this.getValue("title"),iu:this.getValue("url")}},douban:{shareUrl:"https://www.douban.com/share/service",params:{name:this.getValue("title"),href:this.getValue("url"),image:this.getValue("image")}},okru:{shareUrl:"https://connect.ok.ru/dk",params:{"st.cmd":"WidgetSharePreview","st.shareUrl":this.getValue("url"),title:this.getValue("title")}},mailru:{shareUrl:"http://connect.mail.ru/share",params:{share_url:this.getValue("url"),linkname:this.getValue("title"),linknote:this.getValue("description"),type:"page"}}},a=e[t];if(a){a.width=this.getValue("width");a.height=this.getValue("height")}return a!==undefined?this.urlSharer(a):false},urlSharer:function(e){var a=e.params||{},r=Object.keys(a),i,s=r.length>0?"?":"";for(i=0;i<r.length;i++){if(s!=="?"){s+="&"}if(a[r[i]]){s+=r[i]+"="+encodeURIComponent(a[r[i]])}}e.shareUrl+=s;if(!e.isLink){var l=e.width||600,h=e.height||480,u=t.innerWidth/2-l/2+t.screenX,n=t.innerHeight/2-h/2+t.screenY,g="scrollbars=no, width="+l+", height="+h+", top="+n+", left="+u,o=t.open(e.shareUrl,"",g);if(t.focus){o.focus()}}else{t.location.href=e.shareUrl}}};if(e.readyState==="complete"||e.readyState!=="loading"){a.init()}else{e.addEventListener("DOMContentLoaded",a.init)}t.addEventListener("page:load",a.init);t.Sharer=a})(window,document);
