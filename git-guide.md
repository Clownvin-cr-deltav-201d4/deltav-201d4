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
```

<h3>Save Changes in Git</h3>
<p> To save the added changes into history, commit with a useful descriptive message.</p>

```
git commit -m "Commit message here (what is added/changed?)"
```

<h4>Review Changes Before Committing</h4>
<p>Make sure to review changes you have made before committing, and especially before pushing. Once you commit, an almost permanent record of that commit will exist, so make sure it's what you want to do.</p>

```
git diff --staged
```

<h3>Push to GitHub</h3>
<p>To push changes on the current local branch to it's remote branch (on GitHub):</p>

```
git push
```
<p>OR, if the current branch has not been pushed yet:</p>
```
git push -u origin HEAD
```

<h2>Branching</h2>
<h3>To Create A Branch **from current location("HEAD")**</h3>
```
git branch my-branch
```
<h3>To Switch To A Branch</h3>
```
git checkout my-branch
```
<h3>To Switch To A New Branch **from 'master'***</h3>
```
git checkout master -b new-branch
```
