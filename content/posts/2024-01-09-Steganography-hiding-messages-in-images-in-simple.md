---
title: "Steganography: hiding messages in images in simple"
date: 2024-01-09 00:00:01
description: "Steganography is the practice of hiding information within other data. Unlike encryption, where the goal is to secure the contents of communication between two parties, steganography aims to obscure the fact that the parties are communicating at all."
tags: ["Steganography"]
---

Let's imagine three guys: ali, taher, and tarek. ali wants to send a secret message to taher, but tarek is trying to spy on their conversation. While modern encryption helps keep ali and taher's message safe from tarek, tarek can still figure out some things just by knowing they're talking and how often.

To keep their conversation totally secret, ali and taher got clever. They know that tons of pictures are shared online every day. So instead of talking directly, ali can hide his message inside a picture in a spot they both know about. Then taher can find it without tarek knowing they're talking at all.

Pictures are made of millions of tiny dots called pixels. Each pixel has three numbers between 0 and 255, one represents the amount of red, one for green, and one for blue. These numbers make up the colors you see in the picture.


Just like pictures, text is also made up of numbers inside your computer. So, it's not too hard to turn text into a bunch of 1s and 0s, called a binary string. Then, we can tweak the color of a picture just a little bit to hide this binary string inside it without .


Imagine we have a simple picture with only three pixels: one red, one green, and one blue. If we look at the numbers for each pixel, we can decide if they're even or odd. We can change odd numbers to 1 and even numbers to 0. This gives us a binary string like "100 010 001".


We can tweak the picture a tiny bit so it looks almost the same but has different numbers inside. This way, when taher looks at the picture, he won't notice anything strange. But when he checks the numbers, he'll find the hidden message.

By doing this over and over for every pixel in a picture (which can be millions!), we can hide a whole lot of text without anyone knowing it's there. And that's how ali and taher can keep their conversations private, even when tarek is watching!

i made a python program uses steganography to hide messages you can find it [here](https://github.com/mbeayou/Steganography-Tool-For-Images)