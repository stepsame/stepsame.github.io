import{_ as n,o as l,c as p,a as s,b as e,t as o,f as t}from"./app.6741b5f6.js";const u=JSON.parse('{"title":"Shifted Array Search","description":"","frontmatter":{"date":"2023-01-08T00:00:00.000Z","title":"Shifted Array Search","tags":["algorithm","pramp","binary search"]},"headers":[{"level":2,"title":"Question","slug":"question","link":"#question","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"Solution","slug":"solution","link":"#solution","children":[{"level":3,"title":"Code","slug":"code","link":"#code","children":[]},{"level":3,"title":"Time& Space Complexity","slug":"time-space-complexity","link":"#time-space-complexity","children":[]}]}],"relativePath":"posts/shifted_array_search.md"}'),r={name:"posts/shifted_array_search.md"},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),D=t(`<h2 id="question" tabindex="-1">Question <a class="header-anchor" href="#question" aria-hidden="true">#</a></h2><p>A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you don\u2019t have a pre-shifted copy of it.</p><p>For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left. Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns the index of num in shiftArr.</p><p>If num isn\u2019t in shiftArr, return -1. Assume that the offset can be any value between 0 and arr.length - 1.</p><p>Explain your solution and analyze its time and space complexities.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the</span></span>
<span class="line"><span style="color:#A6ACCD;">                                                 # outcome of shifting</span></span>
<span class="line"><span style="color:#A6ACCD;">                                                 # [2, 4, 5, 9, 12, 17]</span></span>
<span class="line"><span style="color:#A6ACCD;">                                                 # three times to the left</span></span>
<span class="line"><span style="color:#A6ACCD;">output: 3 # since it\u2019s the index of 2 in arr</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><p>We could use a modified binary search algorithm.</p><p>There are 3 cases:</p><ol><li>If the mid element is equal to the target, return the mid index.</li><li>If the arr[low] &lt;= the arr[mid], that means the shift pivot is not in the [low, mid] part, so this part is ordered. If arr[low]&lt;= target &lt; arr[mid], the target is in the left part, update the high pointer, otherwise update the low pointer.</li><li>If the arr[low] &gt; the arr[mid], that means the shift pivot is in the [low, mid] part, so the [mid, high] part is ordered. If arr[mid]&lt; target &lt;= arr[high], the target is in the right part, update the low pointer, otherwise, update the high pointer.</li></ol><h3 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">solution</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    low</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> high </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> low </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> high</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        mid </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">low </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> high</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># Case 0: we found the target num at index mid</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> num</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> mid</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># Case 1: no pivot in low-mid range, nums are ordered</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> low </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> mid</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">low</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">]:</span></span>
<span class="line"><span style="color:#A6ACCD;">                high </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> mid </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">                low </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> mid </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># Case 2: pivot in low-mid range, nums are unordered</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">high</span><span style="color:#89DDFF;">]:</span></span>
<span class="line"><span style="color:#A6ACCD;">                low </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> mid </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">                high </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> mid </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">solution</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">17</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">],</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="time-space-complexity" tabindex="-1">Time&amp; Space Complexity <a class="header-anchor" href="#time-space-complexity" aria-hidden="true">#</a></h3><p>Time Complexity: O(logN) Binary search take logN time.</p><p>Space Complexity: O(1)</p>`,16);function y(a,C,A,F,h,d){return l(),p("div",null,[s("h1",c,[e(o(a.$frontmatter.title)+" ",1),i]),D])}const f=n(r,[["render",y]]);export{u as __pageData,f as default};