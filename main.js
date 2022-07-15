// 参考サイト
// https://qiita.com/guchimina/items/9bb040b507d8a6cc59a3

var FindSubject = 'label:twitter';

function getMail() {
    //指定した件名のスレッドを検索して取得
    var myThreads = GmailApp.search(FindSubject);
    //スレッドからメールを取得し二次元配列に格納
    var myMessages = GmailApp.getMessagesForThreads(myThreads);

    for (var i in myMessages) {
        for (var j in myMessages[i]) {
            //スターがないメッセージのみ処理
            if (!myMessages[i][j].isStarred()) {
                var strDate = myMessages[i][j].getDate();
                var strSubject = myMessages[i][j].getSubject();
                var oriMessage = myMessages[i][j].getBody();
                var cutMessage = oriMessage.match(
                    /1px;font-size:1px;color:#ffffff;"> [\s\S]*?<d>/g
                );
                var strMessage = cutMessage[0]
                    .replace('1px;font-size:1px;color:#ffffff;">', '')
                    .replace('<d>', '');
                Logger.log(strMessage);
                Logger.log(strDate);
                Logger.log(strSubject);

                //処理済みのメッセージをスターをつける
                myMessages[i][j].star();
            }
        }
    }
}
