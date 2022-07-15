function fetchContactMail() {
    /* Gmailから特定条件のスレッドを検索しメールを取り出す */
    var strTerms = 'label:twitter';
    var myThreads = GmailApp.search(strTerms, 0, 10); //条件にマッチしたスレッドを取得
    var myMsgs = GmailApp.getMessagesForThreads(myThreads); //スレッドからメールを取得する　→二次元配列で格納  var valMsgs = [];

    var br = /[\r\n]+/g; //改行
    var rep = ''; //置換文字列
    /* 各メールから日時、送信元、件名、内容を取り出す*/
    for (var j = 0; j < myMsgs.length; j++) {
        for (var i = 0; i < myMsgs[j].length; i++) {
            if (!myMsgs[j][i].isStarred()) {
                valMsgs[i] = myMsgs[j][i].getBody().replace(br, ''); //html形式の取得と空白削除
                var myRegexp =
                    /<td class=\"preheader\" style=\"padding:0;margin:0;line-height:1px;font-size:1px;font-size:1px;color:#ffffff;\">([\s\S]*?)<d><\/d><\/td>/;
                //↑tdタグで囲われた場所を抽出するための正規表現。gmailだとstyleで書かれるため大変汚い。
                var text = valMsgs[i].match(myRegexp); // matchを用いると0に素のテキスト1に抽出したテキストが入る
                var date = myMsgs[j][i].getDate();
                var formatD = Utilities.formatDate(date, 'Asia/Tokyo', 'yyyy-MM-dd HH:mm'); //見やすいようにフォーマットをかける
                myMsgs[j][i].star(); // starをつけることで次回以降引っかからないように

                console.log(text[1]);
                console.log(date);
                console.log(formatD);
            }
        }
    }
}
