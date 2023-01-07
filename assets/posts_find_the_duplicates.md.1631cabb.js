import{_ as n,o as l,c as p,a as s,b as o,t as e,f as t}from"./app.33e87c33.js";const m=JSON.parse('{"title":"Find the Duplicates","description":"","frontmatter":{"date":"2022-12-07T00:00:00.000Z","title":"Find the Duplicates","tags":["algorithm","pramp","array","binary-search"]},"headers":[{"level":2,"title":"Question","slug":"question","link":"#question","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"Solution 1","slug":"solution-1","link":"#solution-1","children":[{"level":3,"title":"Case 1 (M \u2248 N)","slug":"case-1-m-\u2248-n","link":"#case-1-m-\u2248-n","children":[]},{"level":3,"title":"Code","slug":"code","link":"#code","children":[]},{"level":3,"title":"Time & Space Complexity:","slug":"time-space-complexity","link":"#time-space-complexity","children":[]}]},{"level":2,"title":"Solution 2","slug":"solution-2","link":"#solution-2","children":[{"level":3,"title":"Case 2 (M \u226B N)","slug":"case-2-m-\u226B-n","link":"#case-2-m-\u226B-n","children":[]},{"level":3,"title":"Code","slug":"code-1","link":"#code-1","children":[]},{"level":3,"title":"Time & Space Complexity","slug":"time-space-complexity-1","link":"#time-space-complexity-1","children":[]}]}],"relativePath":"posts/find_the_duplicates.md"}'),r={name:"posts/find_the_duplicates.md"},c={id:"frontmatter-title",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),D=t(`<h2 id="question" tabindex="-1">Question <a class="header-anchor" href="#question" aria-hidden="true">#</a></h2><p>Given two sorted arrays <code>arr1</code> and <code>arr2</code> of passport numbers, implement a function <code>findDuplicates</code> that returns an array of all passport numbers that are both arrays. Note that the output array should be sorted in ascending order.</p><p>Let <code>N</code> and <code>M</code> be the lengths of <code>arr1</code> and <code>arr2</code>, respectively. Solve for two cases and analyze the time &amp; space complexities of your solutions:</p><p><code>M</code> \u2248 <code>N</code> - the array lengths are approximately the same</p><p><code>M</code> \u226B <code>N</code> - <code>arr2</code> is much bigger than <code>arr1</code>.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">input:  arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">output: [3, 6, 7] # since only these three values are both in arr1 and arr2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="solution-1" tabindex="-1">Solution 1 <a class="header-anchor" href="#solution-1" aria-hidden="true">#</a></h2><h3 id="case-1-m-\u2248-n" tabindex="-1">Case 1 (M \u2248 N) <a class="header-anchor" href="#case-1-m-\u2248-n" aria-hidden="true">#</a></h3><p>We can use the fact that the arrays are sorted to traverse both in an in-order manner simultaneously.</p><p>The general idea of the algorithm is to use two indices, <code>i</code> and <code>j</code>, for <code>arr1</code> and <code>arr2</code>, respectively.</p><p>If arr1[i] is less than arr2[j], we increment i.</p><p>If arr1[i] is greater than arr2[j], we increment j.</p><p>If arr1[i] == arr2[j], we add the value to the output array and increment both indices.</p><h3 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">find_duplicates1</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">arr2</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">    duplicates </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">arr1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">arr2</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> arr1</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> arr2</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">]:</span></span>
<span class="line"><span style="color:#A6ACCD;">            duplicates</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">arr1</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">            i </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">            j </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">elif</span><span style="color:#A6ACCD;"> arr1</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> arr2</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">]:</span></span>
<span class="line"><span style="color:#A6ACCD;">            i </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            j </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> duplicates</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">find_duplicates1</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr1</span><span style="color:#89DDFF;">=[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">],</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">arr2</span><span style="color:#89DDFF;">=[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="time-space-complexity" tabindex="-1">Time &amp; Space Complexity: <a class="header-anchor" href="#time-space-complexity" aria-hidden="true">#</a></h3><p>Time Complexity: <code>O(M+N)</code></p><p>since in the worst-case scenario, we traverse both arrays once.</p><p>Space Complexity: <code>O(N)</code></p><p>the variable duplicates are the only dynamic auxiliary space we\u2019re using in the algorithm. In the worst-case scenario, the size of duplicates is going to be as big as the smaller input array. For instance, when the smaller array is fully contained within the bigger one. The space complexity is therefore O(N), where N \u2264 M.</p><h2 id="solution-2" tabindex="-1">Solution 2 <a class="header-anchor" href="#solution-2" aria-hidden="true">#</a></h2><h3 id="case-2-m-\u226B-n" tabindex="-1">Case 2 (M \u226B N) <a class="header-anchor" href="#case-2-m-\u226B-n" aria-hidden="true">#</a></h3><p>When one array is substantially longer than the other, we should try to avoid traversing the longer one.</p><p>Instead, we can traverse the shorter array and look up its values in the longer array by using the binary search algorithm.</p><h3 id="code-1" tabindex="-1">Code <a class="header-anchor" href="#code-1" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">find_duplicates2</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">arr2</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># let arr2 becomes the smaller one</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">arr1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">arr2</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        arr1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arr2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arr1</span></span>
<span class="line"><span style="color:#A6ACCD;">    duplicates </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">    last_index </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> arr2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        search_index </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">binary_search_index</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">arr1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> i</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> last_index</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">arr1</span><span style="color:#89DDFF;">)</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">-</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> search_index </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            duplicates</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">arr1</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">search_index</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">            last_index </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> search_index</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> duplicates</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">binary_search_index</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">start</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">end</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    low</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> high </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> start</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> end</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> low </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> high</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        mid </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">low </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> high</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> element</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> mid</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> element</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            low </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> mid </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            high </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> mid </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">find_duplicates2</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr1</span><span style="color:#89DDFF;">=[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">],</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">arr2</span><span style="color:#89DDFF;">=[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="time-space-complexity-1" tabindex="-1">Time &amp; Space Complexity <a class="header-anchor" href="#time-space-complexity-1" aria-hidden="true">#</a></h3><p>Time Complexity: <code>O(N * log M)</code></p><p>we running a binary search on <code>arr2</code> <code>N</code> times. Hence the time complexity is <code>O(N\u22C5log(M))</code>.</p><p>Space Complexity: <code>O(N)</code></p><p>The same as solution1.</p>`,32);function y(a,C,A,i,d,h){return l(),p("div",null,[s("h1",c,[o(e(a.$frontmatter.title)+" ",1),F]),D])}const f=n(r,[["render",y]]);export{m as __pageData,f as default};