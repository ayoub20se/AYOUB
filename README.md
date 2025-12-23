<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app
 
# كيفية رفع المشروع على GitHub

## الخطوات بالعربية

1. افتح مجلد المشروع في جهازك.
2. اضغط بزر الفأرة الأيمن واختر "Git Bash Here" أو افتح Terminal في هذا المجلد.
3. نفذ الأوامر التالية بالترتيب:
   ```bash
   git init
   git add .
   git commit -m "النسخة الأولى"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```
4. استبدل `USERNAME` باسم المستخدم الخاص بك على GitHub و`REPO_NAME` باسم المستودع الذي أنشأته على GitHub.
5. بعد التنفيذ، سيظهر مشروعك على GitHub ويمكنك ربطه مع Vercel أو Netlify للحصول على رابط دائم.

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/125LiHOKL2szx5jqLxF0kCO-rZdt9ZDgb

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
