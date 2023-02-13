def biggest(number, other):
    if other > number:
        return other
    return number


def average(numbers):
    total = 0
    for number in numbers:
        total += numbers
    return total / len(numbers)


def draw_quare(n):
    for row in range(n):
        print(n * '*')

def find_longest_word(words):
    longest_word = words[0]
    for word in words:
        if len(word) > len(longest_word):
            longest_word = word
    return longest_word

def paint_costs(area):
    can_price = 80
    required_litters = area / 3
    required_cans = required_litters // 18
    if required_litter % 18:
        required_cans += 1
    return required_cans, required_cans * can_price

def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"
