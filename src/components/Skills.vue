<template>
  <section id="skills">
    <h2>Mes Compétences</h2>
    <b-container>
      <b-row id="web-skills">
        <b-col @click="clickOnSkill" class="web-skill" v-for="(skill, idx) in webSkills" :key="skill.title" :class="getColor(skill)" :data-idx="idx">{{ skill.title }}</b-col>
      </b-row>
      <div id="skill-content">
        <div id="skill-content-code" v-html="skill.code"></div>
        <div id="skill-content-progress">{{ skill.progress }}</div>
      </div>
    </b-container>
  </section>
</template>

<script>
  export default {
    name: 'Skills',
    data: function () {
      return {
        skill: {
          show: false,
          idx: -1,
          code: '',
          progress: 0
        },
        webSkills: [
          { title: 'HTML5',
            score: 100,
            code:
            '<header></header>\n' +
            '<section id="home">\n' +
            '  <div class="title">\n' +
            '    <h1>Hello World !</h1>\n' +
            '  </div>\n' +
            '</section>\n' +
            '<footer></footer>',
            lexer: 'html'
          },
          { title: 'CSS3',
            score: 80,
            code:
          '  #topbar h2 {\n' +
          '    display: inline-block;\n' +
          '    color: white;\n' +
          '    font-family: monospace;\n' +
          '    overflow: hidden;\n' +
          '    border-right: .15em solid $strongGreen;\n' +
          '    white-space: nowrap;\n' +
          '    margin: 0 auto;\n' +
          '    letter-spacing: .15em;\n' +
          '    animation:\n' +
          '      typing 5s steps(40, end),\n' +
          '      blink-caret .5s step-end infinite;\n' +
          '  }\n' +
          '\n' +
          '  /* The typing effect */\n' +
          '  @keyframes typing {\n' +
          '    from { width: 0 }\n' +
          '    to { width: 100% }\n' +
          '  }\n' +
          '\n' +
          '  /* The typewriter cursor effect */\n' +
          '  @keyframes blink-caret {\n' +
          '    from, to { border-color: transparent }\n' +
          '    50% { border-color: $strongGreen }\n' +
          '  }',
            lexer: 'css'
          },
          { title: 'PHP',
            score: 70,
            code:
            '<?php echo \'<h1> Hello World !</h1>\'; ?>',
            lexer: 'php'
          },
          { title: 'Javascript',
            score: 100,
            code:
            'console.log("Hello World !")',
            lexer: 'javascript'
          },
          { title: 'Node',
            score: 70,
            code:
            'const express = require(\'express\')\n' +
            'const app = express()\n' +
            '\n' +
            'app.get(\'/\', function (req, res) {\n' +
            '  res.send(\'Hello World!\')\n' +
            '})\n' +
            '\n' +
            'app.listen(3000, function () {\n' +
            '  console.log(\'Example app listening on port 3000!\')\n' +
            '})\n' +
            '\n',
            lexer: 'javascript'
          },
          { title: 'Vue',
            score: 70,
            code:
            'new Vue({\n' +
            '   el: "#hello-world-app",\n' +
            '      data() {\n' +
            '        return {\n' +
            '          msg: "Hello World!"\n' +
            '        }\n' +
            '      }\n' +
            '});',
            lexer: 'javascript'
          },
          { title: 'jQuery',
            score: 100,
            code:
            '$(document).ready(function(){\n' +
            ' $("#msgid").html("This is Hello World by JQuery");\n' +
            '});',
            lexer: 'javascript'
          },
          { title: 'C++',
            score: 90,
            code:
            '#include <iostream>\n' +
            '\n' +
            'int main()\n' +
            '{\n' +
            '   std::cout << "Hello World !" << std::endl;\n' +
            '   return (0);\n' +
            '}',
            lexer: 'c++'
          },
          { title: 'Assembly 64',
            score: 60,
            code:
            'section .data\n' +
            '    msg db      "hello, world!"\n' +
            '\n' +
            'section .text\n' +
            '    global _start\n' +
            '\n' +
            '_start:\n' +
            '\n' +
            '    mov     rax, 1\n' +
            '    mov     rdi, 1\n' +
            '    mov     rsi, msg\n' +
            '    mov     rdx, 13\n' +
            '    syscall\n' +
            '\n' +
            '    mov    rax, 60\n' +
            '    mov    rdi, 0\n' +
            '    syscall',
            lexer: 'c++'
          },
          { title: 'Ruby',
            score: 70,
            code:
            'class Program\n' +
            '\n' +
            '   def print_hello\n' +
            '     puts "Hello World !"\n' +
            '   end\n' +
            '\n' +
            'end\n' +
            '\n' +
            'app = Program.new\n' +
            'app.print_hello',
            lexer: 'ruby'
          },
          { title: 'Java',
            score: 80,
            code:
            'public class HelloWorld {\n' +
            '\n' +
            '    public static void main(String[] args) {\n' +
            '        System.out.println("Hello, World");\n' +
            '    }\n' +
            '\n' +
            '}',
            lexer: 'java'
          },
          { title: 'C#',
            score: 75,
            code:
            'using System;\n' +
            '\n' +
            'namespace HelloWorld\n' +
            '{\n' +
            '    class Hello \n' +
            '    {\n' +
            '        static void Main() \n' +
            '        {\n' +
            '            Console.WriteLine("Hello World!");\n' +
            '        }\n' +
            '    }',
            lexer: 'c#'
          },
          { title: 'C',
            score: 100,
            code:
            '#include <stdio.h>\n' +
            '\n' +
            'int main()\n' +
            '{\n' +
            '  printf("Hello World!\\n");\n' +
            '  return (0);\n' +
            '}\n',
            lexer: 'c'
          }
        ]
      }
    },
    methods: {
      getColor (skill) {
        if (skill.score >= 90) {
          return ('best')
        } else if (skill.score >= 70) {
          return ('good')
        } else {
          return ('learning')
        }
      },
      toData (skill) {
        let data = new FormData()
        data.append('code', skill.code)
        data.append('lexer', skill.lexer)
        data.append('style', 'default')
        return (data)
      },
      clickOnSkill (e) {
        let idx = e.target.getAttribute('data-idx')
        if (this.skill.idx === idx) {
          this.skill.show = false
          this.skill.idx = -1
          this.skill.code = ''
          this.skill.progress = 0
        } else {
          this.skill.idx = idx
          let data = this.toData(this.webSkills[idx])
          this.$http.post('https://cors-anywhere.herokuapp.com/http://hilite.me/api', data).then((resp) => {
            this.skill.show = true
            this.skill.code = resp.bodyText
            this.skill.progress = this.webSkills[idx].progress
            console.log(this.skill.progress)
            console.log(this.skill.show)
          }, (err) => {
            console.log(err)
          })
        }
      }
    }
  }
</script>

<style lang="scss">

  @import '../assets/scss/colors/index';
  @import '../assets/scss/mixins/compatibility/index';

  #web-skills {
    margin: 5% 1%;
  }

  .web-skill {
    padding: 30px;
    background: $strongGreen;
    color: white;
    font-weight: 800;
    text-transform: uppercase;
    margin: 4px;
    text-shadow: 0 2px #118012;
    @include shadows($lightShadow-black);
    @include transitions($quick)
  }

  .web-skill.col:hover {
    z-index: 1;
    color: #fafafa;
    @include shadows($strongShadow-black);
    @include transforms(scale(1.1))
    opacity: 0.8;
  }

  .best {
    background: #5fcb5f;
  }

  .good {
    background: #1d90da;
  }

  .learning {
    background: #d4e34c;
  }

  #skill-content-code prev {
    text-align: left;
    margin-left: 30px;
  }

</style>
