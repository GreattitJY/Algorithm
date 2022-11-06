def solution(slice, n):
    for i in range(1000):
        if (slice * i) >= n:
            return i