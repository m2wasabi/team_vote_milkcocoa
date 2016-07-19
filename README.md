# Team vote! Milkcocoa

Milkcocoaを使った投票アプリケーションです。

## Architecture

### 3つの状態管理

| stage | Master | Audience |
| --- | --- | -- |
| 0 | タイトル | 投票不可 |
| 1 | 投票受付中 | Shoot可 |
| 2 | 投票締め切り | Vote収穫 |
| 3 | 結果発表 | 投票不可 |

+ 4:中間発表(仮)
+ 5:エンディング(仮)

### 状態の詳細

**Stage 0**  
+ Masterは投票を開始(Stage1に移動)することができる  

**Stage 1**  
+ Masterは投票締切のカウントダウンを開始することができる  
+ カウントダウンは5秒  
+ カウント0で投票結果の集計を開始する(Stage2に移動する)  

+ Audienceは各陣営のボタンを選択することにより、  
+ 各陣営のShootを撃つことができる(連打可能)    
+ このアクションに意味はないが、選択を賑やかしである  

**Stage 2**  
+ MasterからAudienceに集計開始のpushが通知される
+ Audienceはこの通知を受けたら、そのタイミングでの選択陣営の票を投じる  
+ Masterの合図によって各端末1回づつ返すので、原則、連打などによる少人数の組織票は考慮しない  
+ ただ、ブラウザの多重オープンによる多重票の懸念は残る  

+ Masterは任意のタイミングで集計を終了(Stage3に移動)することができる  

**Stage 3**  
+ Masterの画面に集計結果を表示する  
+ 勝敗の画面効果を出す(予定)  
+ Masterは任意のタイミングで表示を終了(Stage4に移動)することができる  

**Stage 4**  
+ Masterは終了するか、Stage0に戻るかを選ぶことができる  

**Stage 5**  
+ 行き止まり  

## Install

#### Download project

```
git clone git://hogehoge
```

OR

Extract zipfile

#### Download modules

```
npm i
```

## Usage

#### build

```
npm run build
```
#### test

```
npm test
```

#### run as a service

```
node app.js
```
