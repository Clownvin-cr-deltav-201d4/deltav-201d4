<h1>DeltaV Git Guide</h1>
<h2>Set up Local Project</h2>
<h3>Initialize New Project</h3>

```
git init
```

<h3>From GitHub</h3>

```
git clone https://github.com/my-user/my-repo-name.git
```

<h2>Git Config</h2>

```
git config --global core.editor "atom"
```

<h2>ACP: Add, Commit, Push</h2>
<h3>Add Changes in Git</h3>

```
git add .  OR git add -A
git push -u origin (branch)
```

<h3>Save Change in Git</h3>
<p> To save the added changes into history, commit with a useful descriptive message.</p>

```
git commit -m "Commit message here (what is added/changed?)"
```

<h4>Review Changes Before Committing</h4>
<p>Make sure to review changes you have made before committing, and especially before pushing. Once you commit, an almost permanent record of that commit will exist, so make sure it's what you want to do.</p>

```
git diff --staged
```
