echo off
REM Creates a text file named for each subdir, in each subdir containing 
REM the names of the .JPGs contained therein. I do not want the _thumb.JPGs
REM and have removed them by hand.
REM TODO: Rewrite in node.

for /d %%d in (./*) do dir %%d\*.jpg /b > %%d/%%d.txt
