# Pig Latin Generator

#### Pig Latin Generator, Wed Jan 18 15:12:20 2017 -0800

#### By Minh Phuong and Marc Larkin

## Description

A simple HTML to convert a text into Pig Latin


## Setup/Installation Requirements

* Clone this repository
* Edit in Atom.

## Specs
# The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
*Input Example:* 3, !
*Output Example:* 3, !

# The program adds "ay" to single-letter words beginning with a vowel.
*Input Example:* i
*Output Example:* iay

# The program adds "ay" to words beginning with a vowel.
*Input Example:* eat
*Output Example:* eatay

# The program shifts the consonant to the end of words beginning with "y" and add "ay".
*Input Example:* year
*Output Example:* earyay

# The program shifts the consonant to the end of words beginning with a consonant and add "ay".
*Input Example:* pig
*Output Example:* igpay

# The program shifts the consonants to the end of words beginning with multiple consonant and add "ay".
*Input Example:* trout
*Output Example:* outray

# If a word begins with "qu", "qu" will be shifted to the end of the word and append ay.
*Input Example:* quack
*Output Example:* ackquay

# If a word begins with a consonant + "qu", the consonant + "qu" will be shifted to the end of the word and append ay.
*Input Example:* squawk
*Output Example:* awksquay

# If a contains special casing, it will retain that casing.
*Input Example:* False
*Output Example:* alseFay




## Known Bugs

There are no known bugs.

## Support and contact details

Contact me with any concerns: mphuong@kent.edu

## Technologies Used

HTML, CSS, Bootstrap

### License


Copyright (c) 2017 Minh Phuong
