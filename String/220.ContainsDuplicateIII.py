# 
#  URL of this problem
#  https://leetcode.com/problems/contains-duplicate-iii/
# 

from sortedcontainers import SortedList
from typing import List
class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], indexDiff: int, valueDiff: int) -> bool:
        # Use a SortedList to maintain a sorted sliding window
        sorted_window = SortedList()
        
        for i, num in enumerate(nums):
            # Remove the element that is out of the indexDiff range
            if i > indexDiff:
                sorted_window.remove(nums[i - indexDiff - 1])
            
            # Use binary search to find the smallest element >= num - valueDiff
            pos = sorted_window.bisect_left(num - valueDiff)
            
            # Check if the found element is within valueDiff
            if pos < len(sorted_window) and abs(sorted_window[pos] - num) <= valueDiff:
                return True
            
            # Add the current element to the sorted window
            sorted_window.add(num)
        
        return False