const allScenarios = {
  "1": [
    {
      hackerCard: {
        description: "I created a fake website that looks just like your favorite shopping site to steal your credit card details.",
        power: 4,
      },
      playerCards: [
        {
          description: "I double-check URLs and only use trusted websites for shopping.",
          power: 5,
        },
        {
          description: "I make sure there’s a lock symbol in the URL before entering any personal information.",
          power: 3,
        },
        {
          description: "I clicked on the link and entered my credit card information.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I sent you a friend request on social media and you accepted without knowing me.",
        power: 3,
      },
      playerCards: [
        {
          description: "I never accept friend requests from people I don’t know.",
          power: 5,
        },
        {
          description: "I accepted, but I immediately removed them once I realized I didn’t know them.",
          power: 3,
        },
        {
          description: "I accept all friend requests so I can have more followers.",
          power: 1,
        }
      ]
    },
    {
        hackerCard: {
          description: "I tracked your movements by accessing your location data through an app.",
          power: 3,
        },
        playerCards: [
          {
            description: "I disable location permissions for all unnecessary apps.",
              power: 5,
          },
          {
            description: "I only allow location access when using specific apps.",
            power: 4,
          },
          {
            description: "I have location services enabled for all my apps.",
            power: 1,
          }
        ]
    },
    {
      hackerCard: {
        description: "I created a phishing link and posted it in a popular chat forum.",
        power: 3,
      },
      playerCards: [
        {
          description: "I never click on random links without verifying their source.",
          power: 5,
        },
        {
          description: "I checked the link using a URL scanner before clicking.",
          power: 4,
        },
        {
          description: "I clicked the link immediately because it looked interesting.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I installed spyware on your device through a malicious app download.",
        power: 4,
      },
      playerCards: [
        {
          description: "I only download apps from trusted sources and read reviews first.",
          power: 5,
        },
        {
          description: "I scan my device regularly for spyware and malware.",
          power: 3,
        },
        {
          description: "I download apps from any site if they look useful.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I used social engineering to convince you to give me access to your work account.",
        power: 4,
      },
      playerCards: [
        {
          description: "I verified your identity through multiple channels before granting access.",
          power: 5,
        },
        {
          description: "I asked my manager if it was okay to grant you access.",
          power: 3,
        },
        {
          description: "I granted you access because you seemed trustworthy.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I tricked you into downloading a file that contained a trojan virus.",
        power: 3,
      },
      playerCards: [
        {
          description: "I never download files from unknown sources.",
          power: 5,
        },
        {
          description: "I scanned the file with my antivirus before opening it.",
          power: 4,
        },
        {
          description: "I opened the file immediately without checking.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I obtained your password because you used 'password123' as your password.",
        power: 3,
      },
      playerCards: [
        {
          description: "I use a password manager to generate and store complex passwords.",
          power: 5,
        },
        {
          description: "I use a strong password with a combination of letters, numbers, and symbols.",
          power: 4,
        },
        {
          description: "I use easy-to-remember passwords like 'password123'.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I sent a fake text message pretending to be from your bank, asking you to verify your account.",
        power: 3,
      },
      playerCards: [
        {
          description: "I ignored the message and contacted my bank directly.",
          power: 5,
        },
        {
          description: "I checked the number against my bank’s official contact information.",
          power: 4,
        },
        {
          description: "I replied to the message with my account details.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I exploited a vulnerability in your outdated software to gain access to your system.",
        power: 4,
      },
      playerCards: [
        {
          description: "I always keep my software and systems up-to-date.",
          power: 5,
        },
        {
          description: "I update my software occasionally when I’m not busy.",
          power: 3,
        },
        {
          description: "I rarely update my software unless I encounter an issue.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I intercepted your data as you logged into a website with an unencrypted connection.",
        power: 4,
      },
      playerCards: [
        {
          description: "I always check for HTTPS in the URL before logging in.",
          power: 5,
        },
        {
          description: "I use a VPN to encrypt my internet traffic.",
          power: 4,
        },
        {
          description: "I don’t check if the connection is secure before logging in.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I guessed your answers to common security questions, like your mother’s maiden name.",
        power: 3,
      },
      playerCards: [
        {
          description: "I use random answers that aren’t related to me for security questions.",
          power: 5,
        },
        {
          description: "I make sure my answers are unique, even if they relate to me.",
          power: 3,
        },
        {
          description: "I use easy-to-guess answers like my pet’s name.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I set up a malicious online advertisement that tricked you into clicking.",
        power: 3,
      },
      playerCards: [
        {
          description: "I use an ad-blocker to prevent malicious ads from loading.",
          power: 5,
        },
        {
          description: "I’m cautious about clicking on ads and verify if they’re legitimate.",
          power: 3,
        },
        {
          description: "I click on ads frequently if they look interesting.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I breached your company’s system by exploiting a weak user password.",
        power: 4,
      },
      playerCards: [
        {
          description: "I enforce strong password policies at my company.",
          power: 5,
        },
        {
          description: "I review passwords periodically to ensure they’re secure.",
          power: 3,
        },
        {
          description: "I don’t enforce password policies as long as they’re easy to remember.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I accessed your system through a remote desktop application with a weak password.",
        power: 3,
      },
      playerCards: [
        {
          description: "I disable remote access when I don’t need it.",
          power: 5,
        },
        {
          description: "I enable two-factor authentication on my remote desktop applications.",
          power: 4,
        },
        {
          description: "I keep remote access always enabled and use simple passwords.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I gained access to your devices because your IoT devices were not secured properly.",
        power: 3,
      },
      playerCards: [
        {
          description: "I change default passwords and secure all my IoT devices.",
          power: 5,
        },
        {
          description: "I use a separate network for my IoT devices.",
          power: 4,
        },
        {
          description: "I never change the default passwords on my IoT devices.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I stole your credit card details by exploiting a vulnerable e-commerce website.",
        power: 4,
      },
      playerCards: [
        {
          description: "I use virtual or disposable credit cards for online purchases.",
          power: 5,
        },
        {
          description: "I review my bank statements regularly for suspicious activity.",
          power: 3,
        },
        {
          description: "I use my primary credit card on all websites, even unfamiliar ones.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I gained access to your system through a phishing SMS message (Smishing).",
        power: 4,
      },
      playerCards: [
        {
          description: "I never click on links in unsolicited text messages.",
          power: 5,
        },
        {
          description: "I verify any suspicious messages by contacting the sender directly.",
          power: 4,
        },
        {
          description: "I clicked on the link because the message seemed urgent.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I spied on you using your webcam because it was unsecured.",
        power: 3,
      },
      playerCards: [
        {
          description: "I use a physical cover to block my webcam when not in use.",
          power: 5,
        },
        {
          description: "I disable camera permissions for all apps that don’t need it.",
          power: 4,
        },
        {
          description: "I keep my webcam on because I find it inconvenient to turn off.",
          power: 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I created a malicious mobile app that you downloaded, giving me access to your phone.",
        power: 4,
      },
      playerCards: [
        {
          description: "I only download apps from the official app store and verify the developer.",
          power: 5,
        },
        {
          description: "I review app permissions and check ratings before downloading.",
          power: 4,
        },
        {
          description: "I download any app that seems interesting, regardless of source.",
          power: 1,
        }
      ]
    }
  ],
  "2" : [
    {
      hackerCard: {
        description: "I tried to access your computer by plugging in a USB drive I found.",
        power: 5
      },
      playerCards: [
        {
          description: "I have a policy of never inserting unknown USB drives into my computer.",
          power: 7
        },
        {
          description: "I scanned the USB drive with antivirus software before opening any files.",
          power: 6
        },
        {
          description: "I plugged it in and opened the files to see what was on it.",
          power: 1
        }
      ]
    },
    {
      hackerCard: {
        description: "I attempted to steal data by accessing your computer's hard drive directly.",
        power: 6
      },
      playerCards: [
        {
          description: "My hard drive is encrypted with a strong password.",
          power: 7
        },
        {
          description: "I regularly back up my important data to a secure location.",
          power: 5
        },
        {
          description: "I left my computer unlocked and unattended.",
          power: 1
        }
      ]
    },
    {
      hackerCard: {
        description: "I tried to record your keystrokes using a hardware keylogger.",
        power: 6
      },
      playerCards: [
        {
          description: "I regularly inspect my keyboard and computer for any unusual devices.",
          power: 7
        },
        {
          description: "I use a virtual keyboard for sensitive information.",
          power: 5
        },
        {
          description: "I never thought someone would physically tamper with my keyboard.",
          power: 1
        }
      ]
    },
    {
      hackerCard: {
        description: "I tried to gain access to your system through an open network port.",
        power: 5
      },
      playerCards: [
        {
          description: "All unused network ports on my devices are physically disabled.",
          power: 6
        },
        {
          description: "I use a firewall to block unauthorized network access.",
          power: 7 // Stronger defense in this context
        },
        {
          description: "I didn't realize network ports could be a security risk.",
          power: 1
        }
      ]
    },
    {
      hackerCard: {
        description: "I attempted to bypass your security by booting from a malicious CD/DVD.",
        power: 4
      },
      playerCards: [
        {
          description: "My computer's BIOS is password-protected.",
          power: 6
        },
        {
          description: "I set the BIOS to boot only from the hard drive.",
          power: 7
        },
        {
          description: "I left a bootable CD in the drive.",
          power: 1
        }
      ]
    },
      {
          hackerCard: {
              description: "I tried to intercept data by physically tapping your network cable.",
              power: 7
          },
          playerCards: [
              {
                  description: "My network cables are secured and regularly inspected.",
                  power: 6
              },
              {
                  description: "I use encryption for all sensitive data transmitted over the network.",
                  power: 8
              },
              {
                  description: "I assumed my network cables were safe from physical tampering.",
                  power: 1
              }
          ]
      },
      {
          hackerCard: {
              description: "I attempted to steal your laptop while you were away from your desk.",
              power: 5
          },
          playerCards: [
              {
                  description: "I use a strong physical cable lock to secure my laptop.",
                  power: 7
              },
              {
                  description: "I never leave my laptop unattended in public places.",
                  power: 6
              },
              {
                  description: "I thought leaving it for a few minutes wouldn't be a problem.",
                  power: 1
              }
          ]
      },
      {
          hackerCard: {
              description: "I tried to access your smartphone by bypassing the lock screen.",
              power: 4
          },
          playerCards: [
              {
                  description: "I use a strong and complex lock screen pattern/PIN/password.",
                  power: 6
              },
              {
                  description: "My phone's data is encrypted.",
                  power: 5 // Encryption is a good secondary defense
              },
              {
                  description: "I use a simple 4-digit PIN that's easy to guess.",
                  power: 1
              }
          ]
      },
  
  {
      hackerCard: {
          description: "I installed a rogue access point to intercept your Wi-Fi traffic.",
          power: 6
      },
      playerCards: [
  
          {
              description: "I regularly check for unauthorized devices on my Wi-Fi network.",
              power: 7
          },
          {
              description: "I use a VPN for all online activity.",
              power: 5 // VPN protects even on compromised WiFi
          },
          {
              description: "I connect to any available Wi-Fi network without checking its security.",
              power: 1
          }
      ]
  },
  {
      hackerCard: {
          description: "I tried to read sensitive information from discarded printouts.",
          power: 4
      },
      playerCards: [
          {
              description: "I shred all sensitive documents before disposal.",
              power: 7
          },
          {
              description: "I store sensitive printouts securely before shredding.",
              power: 5
          },
  
          {
              description: "I throw important papers in the regular trash.",
              power: 1
          }
      ]
  },
  {
      hackerCard: {
          description: "I tried to physically remove the RAM from your computer to steal data.",
          power: 7
      },
      playerCards: [
          {
              description: "My computer case is securely locked and tamper-evident.",
              power: 8
          },
          {
              description: "I use full-disk encryption, making stolen data unusable.",
              power: 6  // Encryption is a crucial secondary defense.
          },
  
          {
              description: "I didn't think someone would physically open my computer.",
              power: 1
          }
      ]
  },
  {
      hackerCard: {
          description: "I attempted to tamper with the hardware of your mobile device to extract data.",
          power: 6
      },
      playerCards: [
          {
              description: "I use a mobile device management (MDM) solution with tamper detection.",
              power: 7
          },
          {
              description: "My mobile device has strong hardware security features enabled.",
              power: 5
  
          },
          {
              description: "I didn’t consider physical tampering as a threat.",
              power: 1
  
          }
      ]
  },
  {
      hackerCard: {
          description: "I tried to access your data by impersonating a technician and requesting physical access to your device.",
          power: 5
      },
      playerCards: [
          {
              description: "I always verify the identity and credentials of technicians before allowing access.",
              power: 7
          },
  
          {
              description: "I have strict policies for granting physical access to devices.",
              power: 6
          },
          {
              description: "I trust anyone who looks official.",
              power: 1
          }
      ]
  },
  {
      hackerCard: {
          description: "I looked for discarded hardware that might contain sensitive data.",
          power: 4
  
      },
      playerCards: [
          {
              description: "I securely wipe or destroy all storage devices before disposal.",
              power: 7
          },
          {
              description: "I have a process for safely disposing of old hardware.",
              power: 6
          },
  
          {
              description: "I throw away old devices without erasing the data.",
              power: 1
          }
      ]
  }
  ],
  "3" : [
    {
      hackerCard: {
          description: "I'm trying to exploit a known vulnerability in your web server software.",
          power: 7
      },
      playerCards: [
          {
              description: "I regularly update my web server software to patch vulnerabilities.",
              power: 9
          },
          {
              description: "I use a web application firewall (WAF) to protect against known exploits.",
              power: 8
          },
          {
              description: "I haven't updated my server software in months.",
              power: 1
          }
      ]
  },
  {
      hackerCard: {
          description: "I'm performing a port scan to find open services on your network.",
          power: 6
      },
      playerCards: [
          {
              description: "I use a firewall to block all unnecessary ports.",
              power: 8
          },
          {
              description: "I regularly monitor network traffic for suspicious activity.",
              power: 7
          },
          {
              description: "I have no idea what ports are open on my network.",
              power: 1
          }
      ]
  },
  {
      hackerCard: {
          description: "I'm attempting a brute-force attack on your login page.",
          power: 7
      },
      playerCards: [
          {
              description: "I have implemented rate limiting and account lockout policies.",
              power: 9
          },
          {
              description: "I use strong, unique passwords and multi-factor authentication.",
              power: 8
          },
          {
              description: "My password is 'password123'.",
              power: 1
          }
      ]
  },
  {
      hackerCard: {
          description: "I'm using a dictionary attack to crack your passwords.",
          power: 6
      },
      playerCards: [
          {
              description: "I enforce strong password policies that require complex and lengthy passwords.",
              power: 8
          },
          {
              description: "I use a password manager to generate and store unique passwords.",
              power: 7
          },
          {
              description: "All my passwords are the same.",
              power: 1
          }
      ]
  },
  {
      hackerCard: {
          description: "I'm exploiting a buffer overflow vulnerability in your application.",
          power: 8
      },
      playerCards: [
          {
              description: "My applications are regularly tested for security vulnerabilities, including input validation checks.",
              power: 10
          },
          {
              description: "I use address space layout randomization (ASLR) to mitigate buffer overflows.",
              power: 9
          },
          {
              description: "I don't perform any security testing on my applications.",
              power: 1
          }
      ]
  },
  {
      hackerCard: {
          description: "I'm attempting a denial-of-service (DoS) attack to disrupt your service.",
          power: 7
      },
      playerCards: [
          {
              description: "I have implemented DDoS mitigation measures and redundancy in my infrastructure.",
              power: 9
          },
          {
              description: "I have a service level agreement (SLA) with my service provider for DDoS protection.",
              power: 8
          },
          {
              description: "I have no plan for dealing with denial-of-service attacks.",
              power: 1
          }
      ]
  },
  {
      hackerCard: {
          description: "I'm using a SQL injection attack to access your database.",
          power: 8
      },
      playerCards: [
          {
              description: "I use parameterized queries and input validation to prevent SQL injection.",
              power: 10
          },
          {
              description: "My database firewall is configured to block malicious SQL queries.",
              power: 9
          },
          {
              description: "I trust all user inputs.",
              power: 1
          }
      ]
  },
  {
      hackerCard: {
          description: "I'm trying to escalate my privileges to gain administrator access.",
          power: 7
      },
      playerCards: [
          {
              description: "I follow the principle of least privilege and enforce strict access controls.",
              power: 9
          },
          {
              description: "I regularly review and update user permissions.",
              power: 8
          },
          {
              description: "All users have administrator privileges.",
              power: 1
          }
      ]
  },
      {
          hackerCard: {
              description: "I'm using a cross-site scripting (XSS) attack to inject malicious code.",
              power: 7
          },
          playerCards: [
              {
                  description: "I implement output encoding and input validation to prevent XSS vulnerabilities.",
                  power: 9
              },
              {
                  description: "I use a content security policy (CSP) to mitigate XSS attacks.",
                  power: 8
              },
              {
                  description: "I don't sanitize user inputs.",
                  power: 1
              }
          ]

      },
      {
          hackerCard: {
              description: "I'm exploiting a cross-site request forgery (CSRF) vulnerability.",
              power: 6
          },
          playerCards: [
              {
                  description: "I use anti-CSRF tokens and same-site cookies to protect against CSRF attacks.",
                  power: 8
              },
              {
                  description: "I educate users about the risks of CSRF and how to avoid them.",
                  power: 7
              },
              {
                  description: "I don't implement any CSRF protection.",
                  power: 1
              }

          ]

      },
      {
          hackerCard: {
              description: "I'm performing reconnaissance to gather information about your systems.",
              power: 5

          },
          playerCards: [
              {
                  description: "I regularly perform vulnerability scans and penetration testing to identify weaknesses.",
                  power: 7

              },
              {
                  description: "I minimize my public attack surface and limit information disclosure.",
                  power: 6

              },
              {
                  description: "I don't think anyone would be interested in targeting my systems.",
                  power: 1
              }

          ]

      },
      {
          hackerCard: {
              description: "I'm attempting a session hijacking attack to steal user credentials.",
              power: 7

          },
          playerCards: [
              {
                  description: "I use secure session management practices, including HTTPS and strong random session IDs.",
                  power: 9

              },
              {
                  description: "I implement two-factor authentication to protect user accounts.",
                  power: 8

              },
              {
                  description: "I don't expire user sessions.",
                  power: 1
              }

          ]
      },


{
  hackerCard: {
      description: "I'm exploiting insecure APIs to gain unauthorized access to your application.",
      power: 7
  },
  playerCards: [

      {
          description: "I follow API security best practices, including authentication, authorization, and input validation.",
          power: 9
      },
      {
          description: "I use API gateways and rate limiting to protect my APIs.",
          power: 8
      },
      {
          description: "My APIs have no security measures in place.",
          power: 1
      }
  ]
},

{
  hackerCard: {
      description: "I'm targeting vulnerabilities in third-party libraries your software is dependent on.",
      power: 6
  },
  playerCards: [

      {
          description: "I regularly update all third-party libraries to patch security flaws.",
          power: 8
      },
      {
          description: "I use software composition analysis (SCA) tools to identify vulnerabilities in third-party components.",
          power: 7
      },
      {
          description: "I don’t keep track of the third-party libraries we use.",
          power: 1
      }
  ]
}
  ],
};


