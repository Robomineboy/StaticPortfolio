#!/bin/bash

echo "🚀 Setting up Sidharth Jain's Portfolio"
echo "======================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node --version) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎯 Next steps:"
    echo "   1. Customize your info:"
    echo "      - Update email in components/Footer.tsx"
    echo "      - Add LinkedIn/GitHub URLs"
    echo "      - Modify project stats if needed"
    echo ""
    echo "   2. Start development server:"
    echo "      npm run dev"
    echo ""
    echo "   3. View at http://localhost:3000"
    echo ""
    echo "   4. When ready to deploy:"
    echo "      - Push to GitHub"
    echo "      - Connect to Vercel"
    echo "      - Deploy automatically"
    echo ""
    echo "📚 See README.md for detailed instructions"
else
    echo ""
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi
