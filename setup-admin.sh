#!/bin/bash
# Run from your project root (where package.json is)

create_file() {
  local path="$1"
  if [ -f "$path" ]; then
    echo "SKIP (already exists): $path"
  else
    mkdir -p "$(dirname "$path")"
    touch "$path"
    echo "CREATED: $path"
  fi
}

# --- admin core ---
create_file "src/admin/AdminDashboardShell.tsx"

# --- config ---
create_file "src/admin/config/sections.ts"

# --- hooks ---
create_file "src/admin/hooks/useAdminAuth.ts"
create_file "src/admin/hooks/useSectionContent.ts"

# --- shared components ---
create_file "src/admin/components/Sidebar.tsx"
create_file "src/admin/components/SeoEditor.tsx"
create_file "src/admin/components/ImageUploader.tsx"

# --- section types ---
create_file "src/admin/sections/types.ts"

# --- advantage section editor ---
create_file "src/admin/sections/homepage/advantage/types.ts"
create_file "src/admin/sections/homepage/advantage/AdvantageEditor.tsx"

echo ""
echo "Done. Existing files were left untouched."