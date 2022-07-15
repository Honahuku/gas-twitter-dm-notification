# gas-twitter-dm-notification

TwitterのDMに届いたメッセージをGmailで受信し、その結果をGASで整形、IFTTTでslackに送信します。

## 初回設定

新しい環境で開発を始めるためのコマンド
nodeは事前にインストールしておく。`node16.15.0`で動作確認済み

```
git clone https://github.com/Honahuku/gas-twitter-dm-notification.git

# プロジェクトで利用するモジュールのインストール
npm install

# claspのログイン
clasp login

# gasのコードを取得する
clasp pull

# コードをgasに上げる
clasp push
```
