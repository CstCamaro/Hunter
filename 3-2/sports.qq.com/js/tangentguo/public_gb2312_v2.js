(function($){
    //��ά��
    var funcs = {};
    var ewmSrc = '';//������¶�ά��
    var logs = {};
    logs.msg = '�洢ִ�й��ĺ�����exe_func_info �� exe_func_list һһ��Ӧ';
    logs['exe_func_info'] = [];
    logs['exe_func_list'] = [];

    //������������
    funcs.nav_more_pop = function(){
        logs.exe_func_info.push('������������');
        $('#moreNav').hover(function(){
            $('#navmenu').show();
            $('#moreNav1').removeClass('moreNav1').addClass('moreNav2');
        },function(){
            $('#navmenu').show();
            $('#moreNav1').removeClass('moreNav1').addClass('moreNav2');
        });
    };

    //һ����¼
    funcs.onelogin = function(){
        logs.exe_func_info.push('һ����¼');
        seajs.use('project/login/oneLogin_v1.5', function () {
            login.init();
        });
        ExposureBoss(1604, 'EXmainNav', 'dc');
    };

    //ͷ������Ĭ������ؼ���
    funcs.auto_key = function(){
        logs.exe_func_info.push('ͷ������Ĭ������ؼ���');
        var input = document.getElementById("sosoArticlKey");
        window.sosoArticleValue = '';
        if (!sosoArticlKey) {return;}
        if (sosoArticlKey) {
            var replace = sosoArticlKey.replace("&#183;", "?").replace("&#23301;", "\u5b05").replace("&#23323;", "\u5b1b")
                .replace("&#22247;", "\u56e7").replace("&#38229;", "\u9555").replace("&amp;#21894;", "\u5586");
            input.value  = sosoArticleValue = replace;
        }
        input.onfocus = function () {
            if (this.value == sosoArticleValue) {this.value = '';}
        };
        input.onblur = function () {
            if (this.value == '') {this.value = sosoArticleValue;}
        };
    }

    //logo����С����
    funcs.articleType = function () {
        logs.exe_func_info.push('logo����С����');
        var subName = ARTICLE_INFO.subName;
        var have = true;
        $('#navList a').each(function (i) {
            if($(this).text()==subName.cname){
                $(this).addClass('cur');have = true;
            }else{
                have = false;
            }
        });
        if(!have){$('#navList').append('<a href="'+subName.url+'" target="_blank" class="cur">'+subName.cname+'</a>');}
    }

    //����ĩβ��[�ص���ҳ]
    funcs.backToHome = function () {
        logs.exe_func_info.push('����ĩβ��[�ص���ҳ]');
        var contentEleObj = $('#Cnt-Main-Article-QQ');
        if(contentEleObj.size()>0&&contentEleObj.children().size()>0){
            var last = contentEleObj.children().last();
            if(last.get(0).tagName.toLowerCase() == "p"&&$.trim(last.text().length>15)&&last.size()==1){
                last.append('<a onclick="registerZone2({bossZone:\'backqqcom\', url: \'http://www.qq.com/?pref=article\'}, 1);" href="http://www.qq.com/?pref=article" target="_blank" title="���������Ѷ��ҳ" id="backqqcom" style="white-space: nowrap;"><img src="http://www.qq.com/favicon.ico" width="16" height="16"><span style="padding-left: 5px; font-size: 14px;">������Ѷ����ҳ&gt;&gt;</span></a>');
            }
        }
    }

    //�ӽӿڻ�ȡ��ά��ͼƬ��ַ
    funcs.get_code_2 = function(callback,qqurl){
        logs.exe_func_info.push('�ӽӿڻ�ȡ��ά��ͼƬ��ַ');
        var url = qqurl||ARTICLE_INFO.article_url;
        window.twocodecallback = callback;
        var d1 = $.ajax({
            url:'http://news.open.qq.com/qrcode/gen.php',
            data:{url:url},
            dataType:'jsonp',
            jsonpCallback:'twocodecallback'
        });
    };
    //share
    funcs.share = function (){
        logs.exe_func_info.push('����');
        seajs.use('//mat1.gtimg.com/news/dc/js/share/share_1.2.0', function () {
            bind();
        });
        var bind = function () {
            $('#shareBtn').hover(function (e) {
                $(this).addClass('showItem');
            }, function (e) {
                $(this).removeClass('showItem');
            });
            //���±���������ʾ
            $('#shareBtn').hover(function () {
                $(this).addClass('showItem');
            },function(){
                $(this).removeClass('showItem');
            })
            //���±�������>��ά��
            $('#shareWx').hover(function(){
                //console.log(ewmSrc);
                if(ewmSrc){
                    $('#shareWx .ewmBox img').attr('src',ewmSrc);
                    $('#shareWx .ewmBox').show();
                }else{
                    funcs.get_code_2(function(d) {
                        ewmSrc = d.url;
                        $('#shareWx .ewmBox img').attr('src', d.url);
                        $('.ewmBox', '#shareWx').show();
                    });
                }
            }, function () {
                $(this).find('.ewmBox').hide();
            });
            //���½�β΢�Ŷ�ά��
            $('#s_ewm').click(function(e){
                e.stopPropagation();
                var pos = $(this).offset();
                if($('#pop_two_code').length==0){
                    $('body').append('<div id="pop_two_code" class="pop_two_code">' +
                        '<div class="pop_close"></div>' +
                        '<div class="down_arrow"></div>' +
                        '<img src="">' +
                        '<p>ɨһɨ�����ֻ������ţ�<br>��΢��ɨ�軹����<br>���������Ѻ�����Ȧ</p>' +
                        '</div>');
                }
                var pop = $('#pop_two_code');
                pop.css({left:pos.left-241,top:pos.top-126})

                if(ewmSrc){
                    $('#pop_two_code img').attr('src',ewmSrc);
                    pop.show();
                }else{
                    funcs.get_code_2(function (d) {
                        $('#pop_two_code img').attr('src', d.url);
                        pop.show();
                    });
                }
            });
            //�رգ���������ط��ر�
            $(document).on('click', function (e) {
                var notobj = $('#pop_two_code');
                if(notobj.length==1){
                    if($.contains(notobj.get(0),e.target)){
                        if(e.target==notobj.find('.pop_close').get(0)) $('#pop_two_code').hide();
                    }else{
                        $('#pop_two_code').hide();
                    }
                }
            });


        };
    };
    //����sougou����
    funcs.sougou = function(){
        logs.exe_func_info.push('����sougou����');
        seajs.use('widget/$.zonedWord', function () {
            $('#Cnt-Main-Article-QQ').zonedWord({
                id: 'sogouTips'
            });
        });
    }
    //����ݺ͵�����scroll
    funcs.right_foot_tools = function () {
        logs.exe_func_info.push('����ݺ͵�����scroll');
        var goTop = $("#goTop");
        $(window).scroll(function (e) {
            var  top = $(this).scrollTop();
            top>400?goTop.show():goTop.hide();
        });
        goTop.click(function (e) {
            $('html,body').animate({scrollTop:0},300);
        });
    }
    //comment
    funcs.qq_yewu_comment = function(){
        logs.exe_func_info.push('����');
        qq_yewu_comment();
    };
    funcs.qq_yewu_huaci = function(){
        logs.exe_func_info.push('�����ղ�');
        qq_yewu_huaci();
    };
    funcs.qq_yewu_video = function(){
        logs.exe_func_info.push('��Ƶ+���ϰ�');
        qq_yewu_video();
    };

    //������ҵ����
    //������
    function public_js_exe(not_list){
        seajs.config({
            alias: {'ui': 'lib/ui', 'boss': 'widget/boss_min'},
            preload: ['ui']
        });
        function isArrayFn (o) {
            return Object.prototype.toString.call(o) === '[object Array]';
        }
        this.funcs = funcs;
        this.logs = logs;

        if(isArrayFn(not_list)){
            this.exe_not(not_list);
        }else if(not_list==='all'){
            this.exe_all();
        }
    }

    public_js_exe.prototype.exe_all = function(){
        for(var fucname in this.funcs){
            this.funcs[fucname]();
            this.logs.exe_func_list.push(fucname);
        }
    };

    public_js_exe.prototype.exe_not = function(skiparr){
        for(var fucname in this.funcs){
            if(skiparr.indexOf(fucname)!==-1){
                continue;
            }
            this.funcs[fucname]();
            logs.exe_func_list.push(fucname);
        }
    };

    window.public_js_exe = public_js_exe;
})(jQuery);

/**����*/
var qq_yewu_comment = function () {
    if (typeof(cmt_id) == "undefined") {
        return;
    }
    window.registerCoralEvent = {
        code: 1,
        ownStyle: commentData.ownStyle || '',
        listHiden: ARTICLE_INFO.site.search(/news|finance|view/) == -1 ? 0 : 1,
        commentNums: commentData.commentNums || 1,
        commentHotNums: commentData.commentNums || 3,
        loginEvent: function () {
            userLogin();
        },
        publicLogined: function (uin, nick, headUrl) {
            var _ifr = document.getElementById('commentIframe');
            if (typeof _ifr.contentWindow.publicLogined == 'function') document.getElementById('commentIframe').contentWindow.publicLogined(uin, nick, headUrl);
        },
        publicLogout: function () {
            var _ifr = document.getElementById('commentIframe');
            if (typeof _ifr.contentWindow.publicLogined == 'function') document.getElementById('commentIframe').contentWindow.publicLogout();
        }
    };
    seajs.use('lib/ui', function (ui) {
        var ifr_cmt = ui.$('commentIframe'), winH = ui.windowHeight();
        //�ϰ�����id����
        if (cmt_id > 1e9) {
            var cmt_ifr_url = '//coral.qq.com/article/' + cmt_id + '/commentnum?callback=_cbSum&source=1&t=' + Math.random();
            ui.crossAsynJson(cmt_ifr_url, '_cbSum', function (data) {
                if (arguments[0].errCode == 0) {
                    ui.$("cmtLink").href = '//coral.qq.com/' + cmt_id;
                    var n = arguments[0].data.commentnum;//������
                    ui.$("cmtNum").innerHTML = n;
                    if (ui.$("cmtNum2")) {
                        ui.$("cmtNum2").innerHTML = n;
                    }
                }
            });
        }
        //����iframe
        var loadIfra = function () {
            ifr_cmt.style.display = 'block';
            ifr_cmt.src = 'http://www.qq.com/coral/coralBeta3/coralMainDom3.0.htm';

            if (ifr_cmt.attachEvent) {
                ifr_cmt.attachEvent("onload", function () {
                    if (ifr_cmt && window['nick']) {
                        registerCoralEvent.publicLogined(uin, nick, Face);
                    }
                });
            } else {
                ifr_cmt.onload = function () {
                    if (ifr_cmt && window['nick']) {
                        registerCoralEvent.publicLogined(uin, nick, Face);
                    }
                };
            }
        };

        ui.addEvent(window, 'scroll', function () {
            var t = ui.scrollY(), ifrH = ui.getY(ifr_cmt);
            if (t + winH + 500 > ifrH) {
                loadIfra();
                ui.removeEvent(window, 'scroll', arguments.callee);
            }
        });

        ui.ready(function () {
            var ifrH = ui.getY(ifr_cmt);
            if (ifrH < winH) {
                loadIfra();
            }
        });
    });
};
/**�����ղ�*/
var qq_yewu_huaci =function () {
    var _COLLECT_TEXT;
    var _COLLECT_TEXT_len = '';
    var C = {
        'creatBox': function () {//�������ʳ����ĵ���
            var newNode = document.createElement("div");
            var articleBox = document.getElementById('Cnt-Main-Article-QQ');
            newNode.setAttribute("id", "hcsc");
            newNode.setAttribute("class", "hcsc");
            newNode.innerHTML = "<div class='hcfc' id='hcfc' ></div><div class='scTools' id='scTools' bosszone='gotofavor'><span>�ղسɹ�</span><a href='http://ilike.qq.com' target='_blank'>�鿴�ҵ��ղ�&gt;&gt;</a></div>";
            articleBox && articleBox.appendChild(newNode);
        },
        'getMousePoint': function (e) {//����������
            var x = e.pageX;
            var y = e.pageY;
            var offset = $('#Cnt-Main-Article-QQ').offset();
            var point = {
                x: x - offset.left,
                y: y - offset.top
            };
            return point;
        },
        'isShowCollect': function (len, cursorPos) { //�Ƿ���ʾ���ʵ���
            if (len > 11) {
                $('#hcfc').show();
                $('#hcsc').css({
                    display: 'block',
                    left: cursorPos.x + 'px',
                    top: cursorPos.y - 32 + 'px'
                });
                $('#scTools').hide();
            } else {
                $('#hcsc').hide();
            }
        },
        'getSelectedText': function (cursorPos) {//���ѡ�е�����
            var text, len;
            // all browsers, except IE before version 9
            if (window.getSelection) {
                var range = window.getSelection();
                text = range.toString();
                text = text.slice(0, 117) + '...';
                len = text.length;
            } else {
                // Internet Explorer
                if (document.selection) {
                    var range = document.selection.createRange();
                    text = range.text;
                    text = text.slice(0, 117) + '...';
                    len = text.length;
                }
            }
            if ('' != text) {
                _COLLECT_TEXT = text;
            }

            if (_COLLECT_TEXT_len != len) {
                C.isShowCollect(len, cursorPos);
            }
            _COLLECT_TEXT_len = len;
        }
    }
    var init = function () {
        C.creatBox();
        bind();
    };
    var bind = function () {
        $('#Cnt-Main-Article-QQ').bind('mouseup', bindFunc['articleMouseup']);
        $(document).bind('mousedown', bindFunc['docDown']);
        $('#hcfc').bind('mousedown', bindFunc['collection']);
        $('#scTools').bind('mousedown', bindFunc['scToolsDown']);
    };
    var bindFunc = {
        'articleMouseup': function (e) {
            var cursorPos = C.getMousePoint(e);
            C.getSelectedText(cursorPos);
            scTools.style.background = '#fff';
        },
        'docDown': function (e) {
            e.stopPropagation();
            $('#hcsc').hide();
            $('#scTools').hide();
        },
        'scToolsDown': function (e) {
            e.stopPropagation();
        },
        'collection': function (e) {
            e.stopPropagation();
            var ty = 2;
            //�ѵ�¼
            var url = '//i.match.qq.com/keep/a?url=' + ARTICLE_INFO.article_url + '&ty=' + ty + '&pa=' + _COLLECT_TEXT + '&fr=��Ѷ' + ARTICLE_INFO.site_cname;
            $('#hcfc').hide();
            if (qq.cookie("skey")) {
                $('#scTools').show();
                $('#hcsc').show();
                $.ajax(url,{dataType:'jsonp'});
            } else {
                userLogin();
                /*login.cbArr.push(function () {
                 $('#scTools').show();
                 $('#hcsc').show();
                 $.ajax(url,{dataType:'jsonp'});
                 });*/
            }
            setTimeout(function () {
                $('#scTools').hide();
            }, 3000);
            registerZone2({bossZone: 'wordFvr', url: ''}, 1);
            return false;
        }
    }
    init();
};
/**��Ƶ+���ϰ�*/
var qq_yewu_video = function () {
    //��Ƶ
    if (!qq.G("listvideoN")) {
        try {
            var t, videoPlayer, videoPlayer, _vIn, _vOut, showVideoPic;
            qq.EA(qq.G("relInfo"), "click", function () {
                showVideo(1);
                var b = qq.G("relVideo"), a = qq.G("relInfo");
                a.style.display = "none";
                qq.showOpacity(b, 200, 20);
                qq.animate(b.style, "height", 0, 548, 50)
            });
            function showVideo(a) {
                qq.getScript("http://qzs.qq.com/tencentvideo_v1/js/tvp/tvp.player.js", function () {
                    videoInfo = new tvp.VideoInfo();
                    videoInfo.setVid(flash_vid);
                    videoInfo.setTitle(flash_title);
                    videoPlayer = new tvp.Player(640, 518);
                    videoPlayer.setCurVideo(videoInfo);
                    videoPlayer.addParam("autoplay", a);
                    videoPlayer.addParam("adplay", 0);
                    videoPlayer.addParam("pic", flash_pic);
                    videoPlayer.addParam("wmode", "transparent");
                    videoPlayer.write("mod_player")
                }, "utf-8", true);
                accessPlayer = 1;
                if (qq.G("focusHub")) {
                    qq.G("focusHub").focus()
                }
            }

            qq.EA(qq.G("v_colse"), "click", function () {
                videoPlayer.pause();
                qq.G("relVideo").style.display = "none";
                qq.G("relInfo").style.display = "block";
                qq.G("relInfo").style.height = "105px";
                qq.showOpacity(qq.G("relInfo"), 200, 50)
            });
            qq.EA(qq.G("relInfo"), "mouseover", function () {
                qq.addClass(qq.G("relInfo"), "relStatus")
            });
            qq.EA(qq.G("relInfo"), "mouseout", function () {
                qq.removeClass(qq.G("relInfo"), "relStatus")
            });
            if (qq.G("moreTvBtn") && qq.G("moreTv")) {
                var mbtn = qq.G("moreTvBtn"), mList = qq.G("moreTv");
                qq.EA(qq.G("relVideo"), "mousemove", function () {
                    mbtn.style.visibility = "visible"
                });
                qq.EA(qq.G("relVideo"), "mouseout", function () {
                    mbtn.style.visibility = "hidden"
                });
                qq.EA(mbtn, "mouseover", function (a) {
                    clearTimeout(_vOut);
                    if (!_vIn) {
                        qq.animate(qq.G("moreTv").style, "right", -339, 0, 50);
                        mbtn.style.visibility = "hidden";
                        _vIn = true, _vOut = null
                    }
                });
                qq.EA(mList, "mouseover", function (a) {
                    clearTimeout(_vOut)
                });
                qq.EA(mList, "mouseout", function (a) {
                    clearTimeout(_vOut);
                    _vOut = setTimeout(function () {
                        qq.animate(mList.style, "right", 0, -339, 50);
                        mbtn.style.visibility = "hidden"
                    }, 500);
                    _vIn = false
                });
                qq.B.ie6 && qq.each(qq.GT(mList, "li"), function (d, c) {
                    d.onmouseover = function () {
                        this.className = "hover"
                    };
                    d.onmouseout = function () {
                        this.className = ""
                    }
                })
            }
            qq.EA(window, "load", function () {
                var b = qq.G("relVideo"), a = qq.G("relInfo");
                if (showVideoPic) {
                    b.style.cssText = "width:640px; height:548px; display:block";
                    a.style.cssText = "height:0";
                    showVideo(0)
                } else {
                    b.style.cssText = "height:0; display:none";
                    a.style.cssText = "height:105px; display:block"
                }
            })
        } catch (e) {
        }
    }

    //���ϰ�
    qq.EA(document, "keydown", function (d) {
        var c = false, b = false, a = false, d = qq.E(d);
        if (d.alt) {
            c = true
        }
        if (d.key == 50) {
            b = true
        }
        if (d.key == 51) {
            a = true
        }
        if (c && b) {
            qq.G("nav").getElementsByTagName("div")[0].setAttribute("title", "\u5bfc\u822a\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e0a\u4e0b\u952e\u6765\u9009\u62e9\u5bfc\u822a");
            rwAccess_2()
        }
        if (c && a) {
            qq.G("Cnt-Main-Article-QQ").parentNode.setAttribute("title", "\u6b63\u6587\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e0a\u4e0b\u952e\u6765\u9605\u8bfb\u5185\u5bb9");
            rwAccess_3()
        }
    });
    //��Ƶ���̼��
    if (qq.G("accessPlay")) {
        qq.G("accessPlay").onfocus = function () {
            rwAccess_v()
        }
    }
    var accessPlayerState = 1;
    qq.EA(qq.G(document), "keydown", function (a) {
        var b = false, a = qq.E(a);
        if (a.key == 32) {
            b = true
        }
        if (b && accessPlayer) {
            if (accessPlayer && accessPlayerState == 1) {
                videoPlayer.pause();
                accessPlayerState = 0
            } else {
                if (accessPlayer && accessPlayerState == 0) {
                    videoPlayer.play();
                    accessPlayerState = 1
                }
            }
        }
    });
    qq.EA(qq.G(document), "keydown", function (b) {
        var a = false, b = qq.E(b);
        if (b.key == 27) {
            a = true
        }
        if (a && accessPlayer) {
            videoPlayer.pause();
            qq.G("relVideo").style.display = "none";
            qq.G("relInfo").style.display = "block";
            qq.G("relInfo").style.height = "105px";
            qq.showOpacity(qq.G("relInfo"), 200, 50);
            qq.G("goRead").focus()
        }
    });

    function rwAccess_v() {
        var a = "//btrace.qq.com/collect?sIp=&iQQ=&sBiz=&sOp=accesskeyV&iSta=&iTy=1617&iFlow=&iSite=" + escape(location.hostname) + "&sUrl=&sRefer=&sLink=&iUseragent=&iScreen=&iRes1=&iRes2=&iRes3=&iRes4=" + Math.random();
        rwImage_v = new Image(1, 1);
        rwImage_v.src = a
    }

    function rwAccess_2() {
        var a = "//btrace.qq.com/collect?sIp=&iQQ=&sBiz=&sOp=accesskey2&iSta=&iTy=1617&iFlow=&iSite=" + escape(location.hostname) + "&sUrl=&sRefer=&sLink=&iUseragent=&iScreen=&iRes1=&iRes2=&iRes3=&iRes4=" + Math.random();
        rwImage_2 = new Image(1, 1);
        rwImage_2.src = a
    }

    function rwAccess_3() {
        var a = "//btrace.qq.com/collect?sIp=&iQQ=&sBiz=&sOp=accesskey3&iSta=&iTy=1617&iFlow=&iSite=" + escape(location.hostname) + "&sUrl=&sRefer=" + escape(document.referrer) + "&sLink=&iUseragent=" + navigator.userAgent + "&iScreen=" + screen.width + "*" + screen.height + "&iRes1=&iRes2=&iRes3=&iRes4=" + Math.random();
        rwImage_3 = new Image(1, 1);
        rwImage_3.src = a
    }

    function ExposureBoss(c, a) {
        var b = "//btrace.qq.com/collect?sIp=&iQQ=" + userQQ + "&sBiz=" + (arguments[2] ? arguments[2] : "") + "&sOp=" + a + "&iSta=&iTy=" + c + "&iFlow=&sUrl=" + escape(location.href) + "&iBak=&sBak=&ran=" + Math.random();
        gImage = new Image(1, 1);
        gImage.src = b
    }

    qq.EA(window, "load", function () {
        showTCBD()
    });
    function showTCBD() {
        qq.getScript("//i.match.qq.com/tips?ran=" + Math.random(), function () {
            if (typeof (TubdTipsCall) == "function") {
                TubdTipsCall()
            }
        }, "utf-8")
    }
};
/*  |xGv00|3165411c3603e87ec43481f33e33a310 */