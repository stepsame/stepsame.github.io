import{_ as n,o as l,c as p,a as s,b as o,t as e,f as t}from"./app.8e15d44c.js";const u=JSON.parse('{"title":"Matrix Spiral Copy","description":"","frontmatter":{"date":"2023-01-07T00:00:00.000Z","title":"Matrix Spiral Copy","tags":["algorithm","pramp","array"]},"headers":[{"level":2,"title":"Question","slug":"question","link":"#question","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"Solution","slug":"solution","link":"#solution","children":[{"level":3,"title":"Code","slug":"code","link":"#code","children":[]},{"level":3,"title":"Time& Space Complexity","slug":"time-space-complexity","link":"#time-space-complexity","children":[]}]}],"relativePath":"posts/matrix_sprial_copy.md"}'),r={name:"posts/matrix_sprial_copy.md"},c={id:"frontmatter-title",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=t(`<h2 id="question" tabindex="-1">Question <a class="header-anchor" href="#question" aria-hidden="true">#</a></h2><p>Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix\u2019s values into a 1D array in spiral order, clockwise.</p><p>Your function then should return that array. Analyze the time and space complexities of your solution.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">input:  inputMatrix  = [ [1,    2,   3,  4,    5],</span></span>
<span class="line"><span style="color:#A6ACCD;">                         [6,    7,   8,  9,   10],</span></span>
<span class="line"><span style="color:#A6ACCD;">                         [11,  12,  13,  14,  15],</span></span>
<span class="line"><span style="color:#A6ACCD;">                         [16,  17,  18,  19,  20] ]</span></span>
<span class="line"><span style="color:#A6ACCD;">output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h2><p>We can just traverse the matrix in spiral order, clockwise.</p><p>We need four variables to record the current top, bottom, left, and right border. And we initialize the top and the left equal to zero, and the bottom and the right equal to rows number and columns number.</p><p>We use a while loop to traverse the matrix. We stop the traverse until the top is greater than the bottom or the left is greater than the right.</p><p>For every iteration, we traverse the top row from left to right, traverse the right column from top to bottom, traverse the bottom row from right to left, then traverse the left column from bottom to top.</p><h3 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">solution</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">input_matrix</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    m</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">input_matrix</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">input_matrix</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">    top</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> bottom</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> right </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> top </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> bottom </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> left </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># top row, left to right</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">left</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> right </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">            result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">input_matrix</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">top</span><span style="color:#89DDFF;">][</span><span style="color:#82AAFF;">j</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">        top </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># right column, top to bottom</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">top</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> bottom </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">            result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">input_matrix</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">][</span><span style="color:#82AAFF;">right</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">        right </span><span style="color:#89DDFF;">-=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># bottom row, right to left</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">right</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> left </span><span style="color:#89DDFF;">-</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">            result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">input_matrix</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">bottom</span><span style="color:#89DDFF;">][</span><span style="color:#82AAFF;">j</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">        bottom </span><span style="color:#89DDFF;">-=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># left column, bottom to top</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">bottom</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> top </span><span style="color:#89DDFF;">-</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">            result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">input_matrix</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">][</span><span style="color:#82AAFF;">left</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">        left </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> result</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">solution</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">input_matrix</span><span style="color:#89DDFF;">=[[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#82AAFF;">                                  </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#82AAFF;">                                  </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">13</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">14</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#82AAFF;">                                  </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">17</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">19</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">]])</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">19</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">17</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                                                             </span><span style="color:#F78C6C;">14</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">13</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">solution</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">input_matrix</span><span style="color:#89DDFF;">=[</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">  </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">  </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">  </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">  </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">  </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">  </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">13</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">17</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">17</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">13</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="time-space-complexity" tabindex="-1">Time&amp; Space Complexity <a class="header-anchor" href="#time-space-complexity" aria-hidden="true">#</a></h3><p>Time Complexity: O(M*N)</p><p>We traverse the whole matrix.</p><p>Space Complexity: O(M*N)</p><p>The result array\u2019s length is equal to the matrix\u2019s element number.</p>`,17);function D(a,C,A,i,h,m){return l(),p("div",null,[s("h1",c,[o(e(a.$frontmatter.title)+" ",1),F]),y])}const _=n(r,[["render",D]]);export{u as __pageData,_ as default};