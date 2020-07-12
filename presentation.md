currently lazy loaded images show a grey background like this

here is an example of another site which shows a key colour from the image instead of a grey background when loading images

i wanted to think about how this might apply to Condé Nast brands and the way that we use images as part of our brand experiences

the risk that comes to mind is that it expands the colour palette too much because we go from having 1 or 2 colours on the page, to potentially having many different colours on the page

we want to pick a colour which represents the image, but also works for the brand

when you look at a photo, the colour that you choose might be different depending on the brand

if we look at this photo in the context of Vogue, we might pick this colour

if we look at the same photo in the context of GQ, we might pick this other colour instead

we want is an algorithm which tries to find colours in the picture that are appropriate for the brand

i used a library called node-vibrant because it's popular

by default, library finds 6 colour swatches for the given image:
  - Vibrant
  - LightVibrant
  - DarkVibrant
  - Muted
  - LightMuted
  - DarkMuted

i set up a simple demonstration site. you enter the path to an image and it will show you the colour palette for that image

this provides visibility into the system for designers

this also allows us to do visual regression testing. what this means is that if we want to change the algorithm in future, we can easily see what effect this has on the output for a large number of sample images.

for example, imagine an engineer decided that it would be more performant to use smaller source images when generating the colour palette

on the left is the output for images 1024px wide, and on the right is the output for images 256px wide: https://percy.io/conde-nast/hackathon2020-prominent-colors/builds/6091916
