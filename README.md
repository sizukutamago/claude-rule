# Claude Rule - 汎用的なCLAUDE.mdテンプレート

TypeScript/pnpm専用の開発ガイドラインテンプレートです。新規プロジェクトで Claude Code を使用する際の初期設定を簡単に行えます。

## 特徴

- 🎯 **Less is more哲学** - シンプルで明確なコード実装
- 🔄 **5段階の実装プロセス** - 計画→TDD→実装→品質テスト→コミット
- 🧪 **Vitestベースのテスト駆動開発** - Red-Green-Refactorサイクル
- 📏 **明確なPRサイズ目安** - 500行で検討、1000行が上限
- 📊 **高いカバレッジ目標** - C0/C1/C2 80%以上

## インストール方法

### 方法1: npxで直接実行（推奨）

新規プロジェクトのルートディレクトリで以下を実行:

```bash
npx @sizukutamago/claude-rule init
```

### 方法2: グローバルインストール

```bash
# グローバルインストール
npm install -g @sizukutamago/claude-rule

# 任意のプロジェクトで実行
claude-rule init
```

### 方法3: GitHubから直接取得

```bash
# CLAUDE.mdを直接ダウンロード
curl -o CLAUDE.md https://raw.githubusercontent.com/sizukutamago/claude-rule/main/CLAUDE.md
```

## 使い方

1. **セットアップを実行**
   ```bash
   npx @sizukutamago/claude-rule init
   ```

2. **プロジェクト情報を入力**
   - プロジェクト名
   - プロジェクトの説明
   - 使用フレームワーク
   - データベース
   - その他のツール

3. **CLAUDE.mdがプロジェクトルートに作成されます**

4. **必要に応じてカスタマイズ**
   - プロジェクト固有の規約を追加
   - 不要なセクションを削除
   - チーム固有のルールを記載

## CLAUDE.mdの内容

テンプレートには以下のセクションが含まれています:

- **プロジェクト概要** - 基本情報と技術スタック
- **開発哲学** - Less is moreの原則とガイドライン
- **コーディング規約** - フォーマット、命名規則、品質基準
- **開発環境セットアップ** - 初期設定手順
- **実装タスクの進め方** - 5段階の実装プロセス
- **TDD（テスト駆動開発）** - Vitestを使用したTDD
- **ビルド・テスト・開発コマンド** - pnpmコマンド一覧
- **アーキテクチャガイドライン** - ディレクトリ構造と設計パターン
- **プルリクエスト・ガイドライン** - PR作成のタイミングとサイズ
- **Git ワークフロー** - ブランチ戦略とコミット規約
- **トラブルシューティング** - よくある問題の解決方法
- **追加リソース** - ドキュメントとツールへのリンク

## チーム利用 vs 個人利用

### チーム利用の場合
- CLAUDE.mdをリポジトリにコミット
- チーム全員が同じガイドラインに従う

### 個人利用の場合
- .gitignoreにCLAUDE.mdを追加（セットアップ時に選択可能）
- 個人の開発スタイルに合わせてカスタマイズ

## 開発

このツール自体の開発に参加する場合:

```bash
# リポジトリをクローン
git clone https://github.com/sizukutamago/claude-rule.git
cd claude-rule

# ローカルでテスト
node bin/init.js
```

## ライセンス

MIT

## 貢献

Issue や Pull Request は歓迎します！

## 作者

sizukutamago

## リンク

- [GitHub Repository](https://github.com/sizukutamago/claude-rule)
- [npm Package](https://www.npmjs.com/package/@sizukutamago/claude-rule)
- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)