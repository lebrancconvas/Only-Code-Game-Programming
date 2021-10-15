using System;

namespace Program
{
	class Program
	{
		static void Main(string[] args)
		{
			String[] Board = new String[] {".",".",".",
																		 ".",".",".",
																		 ".",".","."}; 
			bool isConsidered = true;
			int player = 1;
			while(isConsidered)
			{
				if(player % 2 != 0)
				{
					Console.WriteLine("Player 1 Input: ");
					String posIndex = Console.ReadLine();
					int position = int.Parse(posIndex);
					if(Board[position - 1] == ".")
					{
						Board[position - 1] = "x";
					}
					player++;
					Console.WriteLine(String.Join(",", Board));
				}

				else
				{
					Console.WriteLine("Player 2 Input: ");
					String posIndex = Console.ReadLine();
					int position = int.Parse(posIndex);
					if(Board[position - 1] == ".")
					{
						Board[position - 1] = "o";
					}
					player++;
					Console.WriteLine(String.Join(",", Board));
				}
			}
		}

		static Boolean winCondition()
		{
			
			return true;
		}
	}
} 