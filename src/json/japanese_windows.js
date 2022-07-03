{
  "title": "Always enter half-width space, Allows switching between Japanese/English at the control",
  "rules": [
    {
      "description": "Always enter half-width space",
      "manipulators": [
        {
          "type": "basic",
          "from": {
            "key_code": "spacebar"
          },
          "to": [
            {
              "repeat": false,
              "key_code": "left_shift"
            }
          ]
        }
      ]
    },
    {
      "description": "Allows switching between Japanese/English at the control",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "input_source_if",
              "input_sources": [
                {
                  "language": "ja"
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "japanese_kana"
          },
          "to": [
            {
              "key_code": "japanese_eisuu"
            }
          ]
        },
        {
          "conditions": [
            {
              "type": "input_source_unless",
              "input_sources": [
                {
                  "language": "ja"
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "japanese_eisuu"
          },
          "to": [
            {
              "key_code": "japanese_kana"
            }
          ]
        }
      ]
    }
  ]
}