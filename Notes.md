# Notes

###### Author: Arnab Jain

###### Date: 19th November, 2022 10:00 AM IST

## Minor issues

Inside src/pages/Question14.jsx,
Line #(s) 41 & 46.

Issue(s):

1. The variable 'questions.skinTrend' was written as 'questions.skinTrent'.
2. The variable 'questions.screenTime' was written as 'questions.screentime'.

## Major issues

Inside src/pages/Question14.jsx,

Issues(s):

1. The field named 'acne_breakouts' was missing and that made the AI API to fail. While there's no input for the same, the field is required as the AI was trained with it. I have passed a null value at the time being. ++

---

## Information:

++ As per the src/Functions/script.js file, if the value for concerned/bothers is Acne, it should show another dropdown to select the value for the missing field ('acne_breakouts'). I couldn't find this in the project and so you should consider adding it accordingly so that a proper value can be sent instead of null for 'acne_breakouts'.
