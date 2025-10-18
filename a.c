#include <stdio.h>


int main() {
    int n;
    int i;
    int j;
    int a;
    int b = 0;
    printf("type n: ");
    scanf("%d", &n);
    for (j=(n-1); j>=0; j--) {
        b++;
        for (a=1; a<=j; a++) {
            printf(" ");   
        }
        for (i=1; i<=(b*2-1); i++) {
            printf("0");
        }
        printf("\n");
    }   
}







