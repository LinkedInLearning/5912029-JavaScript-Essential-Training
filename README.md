# JavaScript 基本講座
LinkedInラーニングの「JavaScript 基本講座」コース用のリポジトリです。このコースは [LinkedInラーニング][lil-course-url]で視聴できます。

![JavaScript 基本講座][lil-thumbnail-url] 
JavaScriptは世界でもっとも使われているプログラミング言語です。ほとんどのウェブサイトでJavaScriptが用いられており、さまざまなインタラクティブな機能を実現しています。また、昨今ではウェブ以外のアプリケーション開発やIoT機器の制御などにも広く利用されています。JavaScriptが自由に使えるようになれば、さまざまな環境でプログラミングをすることが可能になります。このコースでは初心者の方がプログラミングについて体系的に知識を習得できるよう、JavaScriptの概要から基本的な書き方までを学習します。ファイルの作り方や基本的な文法はもちろん、変数や関数といったプログラミングで使う基本概念や、if文やfor文といった制御構文の使い方、オブジェクトや配列を用いたデータの取り扱い方などを実際にコードを書きながらわかりやすく解説します。

## リポジトリの使い方
このリポジトリには必要に応じてブランチが設けられています。ブランチのポップアップメニューを使用して、使用するブランチに切り替えたあとにコースを視聴してください。またURLに`「/tree/ブランチ名」`を追加することで、アクセスしたいブランチに移動することも可能です。

## ブランチ
ブランチはレッスンごとに作成されている場合があります。その場合はブランチ名に`「章番号_レッスン番号」`が付けられています。例えば`「02_03」`という名前のブランチは、2章の上から3番目のレッスン用のブランチとなります。

レッスン前と後のコードを格納しているブランチもあります。該当ブランチには「開始時」（beginning）を表す`「b」`と、「終了時」（ending）を表す`「e」` がブランチ名についています。`「b」`のブランチにはレッスン開始時点のコードが、`「e」`のブランチにはレッスン終了時点のコードが格納されています。また「main」のブランチにはコードの最終形が格納されています。

ファイルに変更を加えた後に、エクササイズファイルのブランチを次のブランチに切り替えたさい、次のようなメッセージが表示されることがあります。

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

この問題を解決するには：
	
次のコマンドで変更を加えます：git add .
次のコマンドで変更をコミットします：git commit -m "some message"

## GitHub Codespacesについて
プログラミング言語を学ぶ最良の方法は、実際にそれを使用することです。それがこのコースがGitHub Codespacesと統合されている理由です。GitHub Codespacesは、あなたが普段使っているIDEのすべての機能を提供するクラウド上の手軽な開発環境です。ローカルマシンのセットアップも必要ありません。 GitHub Codespacesを使えば、あなたが職場で使っている他のツールを使用しながら、どのパソコンからでもいつでもプログラミングの実践的な練習ができます。「このコースでGitHub Codespacesを使うには」の動画をチェックして、その使い方を学びましょう。

### インストラクター

**沖 良矢**

_インタラクションデザイナー_

この講師の他のコースを視聴する：[LinkedInラーニング](https://www.linkedin.com/learning/instructors/8515347)

[lil-course-url]: https://www.linkedin.com/learning/javascript-essential-training-2024
[lil-thumbnail-url]: https://media.licdn.com/dms/image/v2/D4D0DAQG6a9wXjvrqHA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729022738194?e=1732582800&v=beta&t=vBUrxJtfqbQj3vRGWjUiO-_dShWDsmibxs6m49Kcsoo
