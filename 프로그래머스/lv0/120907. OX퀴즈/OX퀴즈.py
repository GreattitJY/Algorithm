def valid(equal):
    equal = equal.replace('=', '==')
    return eval(equal)

def solution(quiz):
    return ["O" if valid(i) else "X" for i in quiz]

        