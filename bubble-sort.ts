export default function bubble_sort(arr: number[]): void
{
    for (var x = 0; x < arr.length; x++)
    {
        for (var i = 0; i < arr.length - 1 - x; i++)
        {
            if (arr[i] > arr[i + 1])
            {

                const temp = arr[i + 1];

                arr[i + 1] = arr[i];
                arr[i] = temp;

            }
        }
    }

}