#include <stdio.h>


int main() {
    int n;
    int a=1;
    long long b=1;
    printf("type n: ");
    scanf("%d", &n);
    if (n<0) {
        printf("error");
    } else if (n==0) {
        printf("1");
    } else if (n>0) {
        while (a<=n) {
            b=b*a;
            a++;
        }
    }
    printf("%lld", b);
}






