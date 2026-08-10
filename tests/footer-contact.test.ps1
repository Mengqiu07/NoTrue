$projectRoot = Split-Path -Parent $PSScriptRoot
$pages = @('index.html', 'current-issue.html', 'archive.html', 'about.html', 'authors.html')
$contactLink = '<a href="mailto:Notrue_@outlook.com">Notrue_@outlook.com</a>'

foreach ($page in $pages) {
  $content = Get-Content -Raw -Encoding utf8 (Join-Path $projectRoot $page)
  if (-not $content.Contains($contactLink)) {
    throw "Missing footer contact link in $page"
  }
}

Write-Output "Footer contact links: PASS ($($pages.Count) pages)"
