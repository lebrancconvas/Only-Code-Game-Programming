import pygame
import sys
pygame.init() 

size = width, height = 1200, 800   
speed = [2, 2]
black = 0, 0, 0

screen = pygame.display.set_mode(size)
pygame.display.set_caption("Temarigah") 
logo = pygame.image.load('/Users/poomyimyuean/Desktop/Poomkun/Hub/Code/Project/onlycodegame/Temarigah/sword.bmp') 
pygame.display.set_icon(logo) 

while 1:
	for event in pygame.event.get():
		if event.type == pygame.QUIT: sys.exit()


	screen.fill(black)
	pygame.display.flip()