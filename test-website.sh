#!/bin/bash

# Website Testing Script
BASE_URL="https://niranjanxprt.github.io/eu-ai-act"
echo "🧪 Testing EU AI Act Website..."
echo "=================================="
echo ""

# Test 1: Homepage accessibility
echo "✅ Test 1: Homepage Accessibility"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/")
if [ "$HTTP_CODE" == "200" ]; then
    echo "   ✓ Homepage loads successfully (HTTP $HTTP_CODE)"
else
    echo "   ✗ Homepage failed (HTTP $HTTP_CODE)"
fi
echo ""

# Test 2: CSS file
echo "✅ Test 2: CSS File"
CSS_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/style.css")
if [ "$CSS_CODE" == "200" ]; then
    CSS_SIZE=$(curl -s "$BASE_URL/style.css" | wc -c)
    echo "   ✓ CSS loads successfully (HTTP $CSS_CODE, Size: $CSS_SIZE bytes)"
else
    echo "   ✗ CSS failed to load (HTTP $CSS_CODE)"
fi
echo ""

# Test 3: JavaScript file
echo "✅ Test 3: JavaScript File"
JS_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/app.js")
if [ "$JS_CODE" == "200" ]; then
    JS_SIZE=$(curl -s "$BASE_URL/app.js" | wc -c)
    echo "   ✓ JavaScript loads successfully (HTTP $JS_CODE, Size: $JS_SIZE bytes)"
else
    echo "   ✗ JavaScript failed to load (HTTP $JS_CODE)"
fi
echo ""

# Test 4: Check for key HTML elements
echo "✅ Test 4: HTML Structure"
HTML_CONTENT=$(curl -s "$BASE_URL/")
if echo "$HTML_CONTENT" | grep -q "EU AI Act Guide"; then
    echo "   ✓ Header title found"
else
    echo "   ✗ Header title missing"
fi

if echo "$HTML_CONTENT" | grep -q "Compliance Checker"; then
    echo "   ✓ Compliance Checker section found"
else
    echo "   ✗ Compliance Checker section missing"
fi

if echo "$HTML_CONTENT" | grep -q "risk-levels"; then
    echo "   ✓ Risk Levels section found"
else
    echo "   ✗ Risk Levels section missing"
fi

if echo "$HTML_CONTENT" | grep -q "theme-toggle"; then
    echo "   ✓ Theme toggle button found"
else
    echo "   ✗ Theme toggle button missing"
fi

if echo "$HTML_CONTENT" | grep -q "app.js"; then
    echo "   ✓ JavaScript script tag found"
else
    echo "   ✗ JavaScript script tag missing"
fi

if echo "$HTML_CONTENT" | grep -q "style.css"; then
    echo "   ✓ CSS link tag found"
else
    echo "   ✗ CSS link tag missing"
fi
echo ""

# Test 5: Check for navigation links
echo "✅ Test 5: Navigation Links"
NAV_SECTIONS=("hero" "why-matters" "risk-levels" "sectors" "gdpr" "timeline" "checker" "faq")
for section in "${NAV_SECTIONS[@]}"; do
    if echo "$HTML_CONTENT" | grep -q "href=\"#$section\""; then
        echo "   ✓ Navigation link to #$section found"
    else
        echo "   ✗ Navigation link to #$section missing"
    fi
done
echo ""

# Test 6: Check for interactive elements
echo "✅ Test 6: Interactive Elements"
if echo "$HTML_CONTENT" | grep -q "onclick.*toggleRiskLevel"; then
    echo "   ✓ Risk level toggle functionality found"
else
    echo "   ✗ Risk level toggle missing"
fi

if echo "$HTML_CONTENT" | grep -q "onclick.*switchTab"; then
    echo "   ✓ Tab switching functionality found"
else
    echo "   ✗ Tab switching missing"
fi

if echo "$HTML_CONTENT" | grep -q "onclick.*toggleFaq"; then
    echo "   ✓ FAQ toggle functionality found"
else
    echo "   ✗ FAQ toggle missing"
fi
echo ""

# Test 7: Check JavaScript functions exist
echo "✅ Test 7: JavaScript Functions"
JS_CONTENT=$(curl -s "$BASE_URL/app.js")
JS_FUNCTIONS=("toggleTheme" "toggleMobileMenu" "toggleRiskLevel" "switchTab" "toggleFaq" "initChecker" "handleAnswer")
for func in "${JS_FUNCTIONS[@]}"; do
    if echo "$JS_CONTENT" | grep -q "function $func\|$func.*function\|$func.*="; then
        echo "   ✓ Function '$func' found"
    else
        echo "   ✗ Function '$func' missing"
    fi
done
echo ""

# Test 8: Mobile responsiveness meta tag
echo "✅ Test 8: Mobile Responsiveness"
if echo "$HTML_CONTENT" | grep -q "viewport"; then
    echo "   ✓ Viewport meta tag found (mobile-friendly)"
else
    echo "   ✗ Viewport meta tag missing"
fi
echo ""

# Summary
echo "=================================="
echo "✅ Website Testing Complete!"
echo ""
echo "🌐 Website URL: $BASE_URL"
echo "📊 Repository: https://github.com/niranjanxprt/eu-ai-act"
echo ""

