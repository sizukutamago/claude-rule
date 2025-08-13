#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function main() {
  console.log('🤖 Claude Rule セットアップツール');
  console.log('=====================================\n');

  // 現在のディレクトリにCLAUDE.mdが既に存在するかチェック
  const targetPath = path.join(process.cwd(), 'CLAUDE.md');
  
  if (fs.existsSync(targetPath)) {
    const overwrite = await question('⚠️  CLAUDE.mdが既に存在します。上書きしますか？ (y/N): ');
    if (overwrite.toLowerCase() !== 'y') {
      console.log('✨ セットアップをキャンセルしました。');
      rl.close();
      return;
    }
  }

  // プロジェクト情報の収集
  console.log('\n📝 プロジェクト情報を入力してください：\n');
  
  const projectName = await question('プロジェクト名 (例: my-awesome-app): ') || '[プロジェクト名を記載]';
  const description = await question('プロジェクトの説明: ') || '[プロジェクトの簡潔な説明を記載]';
  const framework = await question('フレームワーク (React/Vue/Next.js/Express/etc.): ') || '[React/Vue/Next.js/Express/etc.]';
  const database = await question('データベース (PostgreSQL/MongoDB/Redis/etc.): ') || '[PostgreSQL/MongoDB/Redis/etc.]';
  const tools = await question('追加ツール (Docker/Git/etc.): ') || '[Docker/Git/etc.]';

  // テンプレートファイルの読み込み
  const templatePath = path.join(__dirname, '..', 'CLAUDE.md');
  let template;
  
  try {
    template = fs.readFileSync(templatePath, 'utf8');
  } catch (error) {
    console.error('❌ エラー: テンプレートファイルが見つかりません。');
    console.error('   パッケージが正しくインストールされているか確認してください。');
    rl.close();
    process.exit(1);
  }

  // プレースホルダーの置換
  template = template.replace('[プロジェクト名を記載]', projectName);
  template = template.replace('[プロジェクトの簡潔な説明を記載]', description);
  template = template.replace('[React/Vue/Next.js/Express/etc.]', framework);
  template = template.replace('[PostgreSQL/MongoDB/Redis/etc.]', database);
  template = template.replace('[Docker/Git/etc.]', tools);

  // ファイルの書き込み
  try {
    fs.writeFileSync(targetPath, template, 'utf8');
    console.log('\n✅ CLAUDE.mdを作成しました！');
  } catch (error) {
    console.error('❌ エラー: ファイルの書き込みに失敗しました。');
    console.error(error);
    rl.close();
    process.exit(1);
  }

  // .gitignoreへの追加提案
  const gitignorePath = path.join(process.cwd(), '.gitignore');
  if (fs.existsSync(gitignorePath)) {
    const addToGitignore = await question('\n.gitignoreにCLAUDE.mdを追加しますか？（個人設定の場合推奨） (y/N): ');
    if (addToGitignore.toLowerCase() === 'y') {
      const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
      if (!gitignoreContent.includes('CLAUDE.md')) {
        fs.appendFileSync(gitignorePath, '\n# Claude Code設定\nCLAUDE.md\n');
        console.log('✅ .gitignoreにCLAUDE.mdを追加しました。');
      } else {
        console.log('ℹ️  CLAUDE.mdは既に.gitignoreに含まれています。');
      }
    }
  }

  console.log('\n🎉 セットアップが完了しました！');
  console.log('\n次のステップ:');
  console.log('1. CLAUDE.mdを開いて、プロジェクト固有の設定を追加してください');
  console.log('2. チーム共有する場合は、.gitignoreからCLAUDE.mdを削除してください');
  console.log('3. Claude Codeで開発を開始してください！\n');

  rl.close();
}

main().catch((error) => {
  console.error('予期しないエラーが発生しました:', error);
  rl.close();
  process.exit(1);
});